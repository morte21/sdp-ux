import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="technology">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Three Core Technologies</h1>
      <h2 className="gradient__text">Protecting the global environment.</h2>
      <h2 className="gradient__text">Using new energy sources and saving energy.</h2>
      <h2 className="gradient__text">Protecting people’s health and safety.</h2>
    </div>
    <div>
        <h1 className="gradient__text">Six Sectors</h1>
    </div>
    <div className="gpt3__blog-container">
      
      
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Environmental protection" text="Business sector that manufactures equipment for promoting the protection of the global environment." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Medical" text="Business sector that manufactures medical and nursing equipment for contributing to human health." />
        <Article imgUrl={blog03} date="Information and communications" text="Business sector that manufactures ICT equipment such as computers, communications equipment, and their peripheral devices." />
        <Article imgUrl={blog04} date="Industrial" text="Business sector that manufactures industrial automation equipment such as machine tools and robots." />
        <Article imgUrl={blog05} date="Energy utilization" text="Business sector that manufactures equipment for electric power generation and conversion, energy saving, and new energy utilization." />
        <Article imgUrl={blog06} date="Home automation" text="Business sector that manufactures equipment for improving lifestyle." />
      </div>
    </div>
  </div>
);

export default Blog;