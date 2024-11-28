import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component

const Home = ({ user, onLogout }) => {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [blogs, setBlogs] = useState([]); // State to store blogs
  const [blogContent, setBlogContent] = useState(''); // Input for new blog content

  // Handle adding a blog
  const handleAddBlog = () => {
    if (blogContent.trim()) {
      const newBlog = {
        id: Date.now(),
        content: blogContent,
        userEmail: user.email,
      };
      setBlogs([...blogs, newBlog]);
      setBlogContent('');
      setShowAddBlog(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar user={user} onLogout={onLogout} /> */}

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome to the Blog Page
        </h2>
        <div className="text-center mb-4">
          <button
            onClick={() => setShowAddBlog(!showAddBlog)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showAddBlog ? 'Cancel' : 'Add Blog'}
          </button>
        </div>

        {/* Add Blog Form */}
        {showAddBlog && (
          <div className="bg-white shadow-md rounded-lg p-4 max-w-lg mx-auto mb-6">
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 resize-none"
              rows="4"
              placeholder="Write your blog here..."
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            ></textarea>
            <button
              onClick={handleAddBlog}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Post Blog
            </button>
          </div>
        )}

        {/* Display Blogs */}
        <div className="space-y-4">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-600">No blogs yet. Add a new one!</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <p className="text-gray-800">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Posted by: <strong>{blog.userEmail}</strong>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
