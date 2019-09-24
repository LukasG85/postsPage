import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import BannerBcg from "../../img/Banner.jpg";

export default function Header() {
  return (
    <header>
      <MenuContainer>
        <Logo />
      </MenuContainer>
      <Banner banner={BannerBcg}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
          </div>
        </div>
      </Banner>
    </header>
  );
}

const MenuContainer = styled.div`
  display: flex;
  height: 70px;
`;

const Banner = styled.div`
  position: relative;
  height: 580px;
  padding-top: 70px;
  background: url(${props => props.banner});
  background-size: cover;
  background-position: center center;
  h1 {
    font-family: Roboto sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 60px;
    }
  }
`;
