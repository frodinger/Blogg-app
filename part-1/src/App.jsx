import Header from "./components/Header";
import Home from "./pages/Home";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import PostDetail from "./components/PostDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import BlogContextProvider from './context/BlogContext.jsx'

function App() {

  return (
    <BlogContextProvider>
      <BrowserRouter>
        <Header />
  
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/post/:id" component={PostDetail} />
        </Routes>
      </BrowserRouter>
    </BlogContextProvider>
    );
}

export default App