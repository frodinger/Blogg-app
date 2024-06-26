import React, { createContext, useState, useContext, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

const loadFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  if (data) {
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      const fixedData = parsedData.map(blog => ({
        ...blog,
        category: blog.category || 'Okategoriserad',
        comments: blog.comments || [] // Ensure comments array exists
      }));
      return fixedData;
    } else {
      console.error(`Data in localStorage for key '${key}' is not an array`);
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const BlogProvider = ({ children }) => {
  const initialBlogs = [
    { id: 1, title: 'Skapa din drömträdgård med enkla tips och tricks', author: 'Isabella Andersson', text: 'Att ha en vacker och välskött trädgård behöver inte vara komplicerat eller dyrt. Med några enkla tips och tricks kan du förvandla din trädgård till en avkopplande oas där du kan njuta av naturen. Börja med att planera din trädgård, välj växter som passar din klimatzon och ta hänsyn till sol- och skugglägen. Komplettera med stenläggningar eller träaltaner för att skapa olika zoner och använda olika material för att skapa kontraster. Glöm inte belysningen för att förlänga trädgårdens användningstid på kvällarna. Med lite tid och kreativitet kan du skapa din drömträdgård som kommer att glädja dig år efter år.', category: 'Trädgård', comments: [] },
    { id: 2, title: 'Renovera ditt hem med stil: Tips för att lyckas med ditt projekt', author: 'Liam Lundgren', text: 'Att renovera sitt hem kan vara både spännande och utmanande. För att lyckas med ditt renoveringsprojekt är det viktigt att planera noggrant och ha realistiska förväntningar. Börja med att göra en noggrann inventering av ditt hem och identifiera vilka områden som behöver renoveras. Prioritera de mest akuta projekten och skapa en budget för ditt projekt. Ta sedan dig tid att forska på olika material och stilar för att hitta det som passar din smak och budget. Kom ihåg att anlita professionella hjälp om det behövs och att ta det lugnt under processen. Med rätt förberedelse och en positiv inställning kan du förvandla ditt hem till en plats som du älskar att vara i.', category: 'Renovering', comments: [] },
    { id: 3, title: 'Skapa en harmonisk inredning med färg och mönster', author: 'Sofia Petrovici', text: 'Att inreda sitt hem handlar inte bara om att välja möbler och accessoarer, det handlar också om att skapa en harmonisk atmosfär där man trivs. En av de bästa sätten att göra detta är genom att använda färg och mönster på ett smart sätt. Börja med att välja en grundfärg som du älskar och bygg sedan upp din palett runt den. Komplettera med olika mönster och texturer för att skapa visuell intresse och djup i rummet. Tänk på att balansera ljusa och mörka nyanser för att skapa en harmonisk känsla. Glöm inte heller bort belysningen, som kan göra underverk för att förbättra atmosfären i ett rum. Med lite kreativitet och mod kan du skapa en inredning som verkligen speglar din personlighet och stil.', category: 'Inredning', comments: [] }
    ];
    
    const [blogs, setBlogs] = useState(() => {
    const savedBlogs = loadFromLocalStorage('blogs', initialBlogs);
    console.log('Loaded blogs:', savedBlogs);
    return savedBlogs;
    });
    
    useEffect(() => {
    saveToLocalStorage('blogs', blogs);
    }, [blogs]);
    
    const addBlog = (title, text, category, user) => {
    const newBlog = {
    id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
    title,
    author: user.name,
    text,
    category,
    comments: [] // Initialize comments array for new blogs
    };
    setBlogs([...blogs, newBlog]);
    };
    
    const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
    };
    
    const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
    };
    
    const addComment = (blogId, comment) => {
    setBlogs(blogs.map(blog => {
    if (blog.id === blogId) {
    return { ...blog, comments: [...blog.comments, comment] };
    }
    return blog;
    }));
    };
    
    return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog, addComment }}>
    {children}
    </BlogContext.Provider>
    );
    };
