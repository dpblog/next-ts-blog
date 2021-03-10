import styled, { createGlobalStyle } from "styled-components";

interface ColorProps {
  readonly primary?: boolean;
  readonly big?: boolean;
  readonly fontBig?: boolean;
}

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 62.5%;
  }
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button<ColorProps>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#f56038" : "#f59838")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#f59838" : "#f56038")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
