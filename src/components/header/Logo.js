import React from "react";
import styled from "styled-components";
import LogoImg from "../../img/logo.svg";

const Logo = () => {
  return <Img src={LogoImg} alt="logo" />;
};

export default Logo;

const Img = styled.img`
  width: 180px;
`;
