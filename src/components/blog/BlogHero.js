import React from 'react';

const BlogHero = () => {
    return (
        <div className="hero-section blog">
        <div className="hero-side">
          <h1>The Blog</h1>
          <h5 className='text-agcademy-blue'>
          Be informed about the latest trend in agriculture and related articles from global perspective.
          </h5>
            <hr></hr>
        </div>
        <div className="hero-side responsive">
          <img src={require('../../assets/blog-hero.svg')} alt="Hero "/>
        </div>
      </div>
    )
}
export default BlogHero;