import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { SingleBlog } from "./SingleBlog";
import { blogCache } from '../../services/blog';

const BlogsList = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [blogs, setBlogs] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getBlogList = async () => {
    const bloglists = await blogCache.getBlogs({
      page,
      blogs,
      setLoading
    });
    setBlogs(bloglists);
  }
  useEffect(()=> {
    if(loading){
      getBlogList();
      return;
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loading, page]);
  const loadMore = () => {
    setPage(page+1);
    setLoading(true);
  };
  return (
    <>
      <div className="blogs-list">
        {blogs.map((blog, index) => {
          return <SingleBlog blog={blog} key={index}/>;
        })}
      </div>
      <div className="load-more">
          {loading && (
            "Loading blogs......."
          )}
      </div>
      <div className="load-more">
        <button onClick={loadMore}>
          Load More{" "}
          {loading && (
            <CircularProgress
              color="inherit"
              sx={{
                color: "#fffff",
              }}
            />
          )}{" "}
        </button>
      </div>
    </>
  );
};
export default BlogsList;
