import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/projectApi/api.php?blogs')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  return (
    <section className="w-100 float-left blog-con padding-top padding-bottom position-relative" id="blog">
      <div className="container">
        <div className="blog-inner-con position-relative">
          <div className="generic-title text-center">
            <h6>Latest News</h6>
            <h2 className="mb-0">Blog &amp; Articles</h2>
          </div>
          <div className="blog-box wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <div className="row">
              {posts.length === 0 && (
                <p>Loading posts...</p>
              )}
              {posts.map(post => (
                <div className="col-lg-4" key={post.id}>
                  <div className="blog-box-item">
                    <div className="blog-img">
                      <a href="#">
                        <figure className="mb-0">
                        
                          <img src="src/assets/image/blog-img-3.png" alt="blog-img" className="img-fluid" />
                        </figure>
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-auteher-title">
                     
                        <span>By Admin</span>
                        <span className="float-lg-right">—</span>
                      </div>
                      <a href="#">
                        <h4>{post.title}</h4>
                      </a>
                      <p>{post.content}</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
