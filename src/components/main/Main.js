import React from "react";
import styled from "styled-components";
import Car from "../../img/car.jpg";
import PostSlider from "./PostSlider";

const Main = () => {
  return (
    <MainWrapper>
      <div className="container main-container">
        <div className="row no-gutters">
          <div className="col-md-6 ">
            <img src={Car} alt="car inside" />
          </div>
          <div className="col-md-6 blog-info">
            <h2>lorem ipsum</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className="row no-gutters slider">
          <div className="col-md-6">
            <PostSlider />
          </div>
          <div className="col-md-6 slider-image">
            <img src={Car} alt="car inside" />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  min-height: 970px;
  font-family: Roboto sans-serif;
  .main-container {
    margin-top: -50px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .blog-info {
      padding: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: #ffffff;
      @media (min-width: 768px) {
        padding: 20px 40px;
        text-align: left;
      }
      @media (min-width: 992px) {
        padding-left: 100px;
        padding-right: 70px;
        text-align: left;
      }

      h2 {
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        @media (min-width: 992px) {
          font-size: 38px;
        }
      }
      p {
        color: #8d8d8d;
        font-size: 18px;
      }
    }
  }
  .slider {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
    .slider-image {
      height: 400px;
      align-self: flex-end;
    }
  }
`;
