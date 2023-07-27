import React from "react";

const BlogForm = () => {
  return (
    <div className="blog-form">
      <div className="intro">
        <h3>Get more to your inbox</h3>
        <h6>Be the first to know when it drops!</h6>
      </div>
      <div className="subscribe">
        <h3>Subscribe to agcaLetter</h3>

        <form className="sub-form">
          <input className="email-address" placeholder="EMAIL ADDRESS" />
          <button className="act-button">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};
export default BlogForm;
