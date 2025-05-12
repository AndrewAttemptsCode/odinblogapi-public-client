import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 100%;
  border: 8px solid #565c68;
  border-top-color: #1d66db;
  animation: ${spin} 0.5s linear infinite;
`

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;