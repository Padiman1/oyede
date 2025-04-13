import React from 'react';
import './BlogHero.css'; // Create this CSS file for styling



const BlogHero  = ({ title }) => {
  return (
    <section className="blog-hero">
      <div className="blog-hero-overlay" />
      <h1 className="blog-hero-title">{title}</h1>
    </section>
  );
};

export default BlogHero;
