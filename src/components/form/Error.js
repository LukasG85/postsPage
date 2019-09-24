import React from "react";
import styled from "styled-components";

const Error = ({ errors }) => {
  const errorsReduce = [...new Set(errors)];
  return errors.length > 0 ? (
    <ErrorWrapper>
      {errorsReduce.map((error, index) => (
        <p className="error" key={index}>
          {error}
        </p>
      ))}
    </ErrorWrapper>
  ) : null;
};

export default Error;

const ErrorWrapper = styled.div`
  font-family: Roboto sans-serif;
  .error {
    margin: 0;
    font-size: 16px;
    color: red;
    text-align: center;
    @media (min-width: 992px) {
      text-align: left;
    }
  }
`;
