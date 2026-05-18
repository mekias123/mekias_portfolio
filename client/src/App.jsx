import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/"           element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog"       element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*"           element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
