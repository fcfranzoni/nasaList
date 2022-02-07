import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const LoadingView = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const WrapLoadingView = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
  /* border: 3px solid green; */
  padding: 10px;
  margin-top: 50px;
`;

export { LoadingView, WrapLoadingView };
