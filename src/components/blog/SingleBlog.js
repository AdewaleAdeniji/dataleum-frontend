import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import readingTime from 'reading-time';
export const SingleBlog = ({ blog }) => {
  const stats = readingTime(blog?.contentMarkdown);
  return (
    <div className="single-blog">
      <img src={blog?.coverImage||require("../../assets/blog-image.svg")} alt="Blog " />
      <Link to={`/blog/${blog.id}`} className='blog-title'>{blog?.title}</Link>
      <p className="meta-data">
        <span>{moment(blog?.dateAdded).format('ll')}. </span>
        <span>{stats.text}</span>
      </p>
      <img src={require("../../assets/logo-flat-white.svg")} alt="Agcademy" className='alt-sig'/>
    </div>
  );
};
