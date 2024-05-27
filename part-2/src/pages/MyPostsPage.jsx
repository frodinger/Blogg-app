import React, { useState, useContext } from 'react';
import AddPost from '../components/AddPost';
import MyPosts from '../components/MyPosts';

const MyPostsPage = () => {

  return (
        <section className="py-4 px-4">
          <AddPost />
          <MyPosts />
        </section>
    );
};

export default MyPostsPage;