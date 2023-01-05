import Styled, { keyframes } from "styled-components";

type props = {
  background: any;
};
export const LoaderContainer = Styled.div<props>`
  min-height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background: url(${(props) => props.background});
`;

export const Loader = Styled.div`
  display: inline-block
  position: relative;
  width: 80px;
  height: 80px;
`;

const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  
`;

export const LoaderItem = Styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #def10ca2 transparent transparent transparent;

&&:nth-child(1) {
  animation-delay: -0.45s;
}
&&:nth-child(2) {
  animation-delay: -0.3s;
}
&&:nth-child(3) {
  animation-delay: -0.15s;
}
`;
