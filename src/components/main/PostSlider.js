import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PostSlider = () => {
  const [posts, setPost] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getPosts();
  }, []);
  // get posts from api
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPost(data.slice(0, 10));
  };

  // functions for scrolling posts
  const nextPost = () => {
    setCurrent(current + 1);
    if (current === posts.length - 1) {
      setCurrent(0);
    }
  };

  const prevPost = () => {
    setCurrent(current - 1);
    if (current <= 0) {
      setCurrent(posts.length - 1);
    }
  };

  return (
    <PostSliderWrapper>
      <div className="slider-arrows">
        <button onClick={prevPost}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextPost}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="posts-container">
        {typeof posts[current] !== "undefined" ? (
          <>
            <h3 className="title">{posts[current].title}</h3>
            <p className="contents">{posts[current].body}</p>
            <p className="signature">{posts[current].id}</p>
          </>
        ) : null}
      </div>
    </PostSliderWrapper>
  );
};

export default PostSlider;

const PostSliderWrapper = styled.div`
  height: 470px;
  background-color: #ffffff;
  font-family: Roboto sans-serif;
  .slider-arrows {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      background-color: #000000;
      color: #ffffff;
      border: none;
      font-size: 44px;
      transition: background-color 0.3s ease-in-out;
      &:first-child {
        margin-right: 3px;
      }
      &:hover {
        background-color: #403b3b;
      }
    }
  }
  .posts-container {
    padding: 20px 20px 0px 20px;
    @media (min-width: 768px) {
      padding: 20px 40px 0px 40px;
    }

    @media (min-width: 992px) {
      padding: 20px 45px 0px 60px;
    }
    .title {
      margin-bottom: 45px;
      font-size: 26px;
      text-transform: uppercase;
    }
    .contents {
      margin-bottom: 45px;
      font-size: 18px;
      color: #8d8d8d;
    }
    .signature {
      text-align: right;
      color: #8d8d8d;
    }
  }
`;
