import React, { useState, useEffect } from "react";

import axios from "axios";

const AddHospital = () => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/hospitals");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  console.log(post);
  return <div></div>;
};

export default AddHospital;
