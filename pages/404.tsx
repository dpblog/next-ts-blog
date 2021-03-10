import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { colordancing1, colordancing2, colordancing3, shadowsdancing1, shadowsdancing2 } from "../styles/404.keyframes";

const DivContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;
  background-color: #0a2f35;
`;
const BoxContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;
const HeadingMain = styled.section`
  font-size: 32rem;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 960px) {
    font-size: 15rem;
  }
`;
const HeadingSub = styled.span`
  font-size: 4rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    font-size: 1.8rem;
  }
`;
const MainContent = styled.span`
  margin: 1rem;
  &:nth-of-type(1) {
    animation: ${colordancing1} 8s infinite;
  }
  &:nth-of-type(2) {
    width: 12rem;
    height: 15rem;
    border-radius: 999px;

    &:before,
    :after {
      border-radius: 0%;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: inherit;
      height: inherit;
      border-radius: 999px;
      animation: ${shadowsdancing1} 8s infinite;
    }
    @media screen and (max-width: 960px) {
      width: 5.5rem;
      height: 7.5rem;
      margin: 0.1rem;
      &:before,
      :after {
      border-radius: 0%;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: inherit;
      height: inherit;
      border-radius: 999px;
      animation: ${shadowsdancing2} 8s infinite;
    }
    }
  }
  &:nth-of-type(3) {
    animation: ${colordancing3} 8s infinite;
  }
`;
const MainContentZero = styled.span`
  position: absolute;
  top: -9999em;
  left: -9999em;
`;
const SubContent = styled.span`
  margin-inline: 1.2rem;
  &:nth-of-type(1) {
    animation: ${colordancing1} 8s infinite;
  }
  &:nth-of-type(2) {
    animation: ${colordancing2} 8s infinite;
  }
  &:nth-of-type(3) {
    animation: ${colordancing3} 8s infinite;
  }
`;

export default function PageNotFound() {
  return (
    <DivContainer>
      <BoxContent>
        <Heading>
          <HeadingMain>
            <MainContent>4</MainContent>
            <MainContent>
              <MainContentZero>0</MainContentZero>
            </MainContent>
            <MainContent>4</MainContent>
          </HeadingMain>
          <HeadingSub>
            <SubContent>page</SubContent>
            <SubContent>not</SubContent>
            <SubContent>found</SubContent>
          </HeadingSub>
        </Heading>
      </BoxContent>
    </DivContainer>
  );
}
