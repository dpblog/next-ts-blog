import styled from "styled-components";
import { FaCode } from "react-icons/fa";
import { Container } from "../../styles/globalStyles";

interface NavMenuProps {
  readonly isActive: boolean;
}
export const Nav = styled.nav`
  background-color: #0a2f35;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 4rem;
  cursor: pointer;
  &:hover {
    color: #f56038;
  }
`;

export const NavIcon = styled(FaCode)`
  margin-right: 1rem;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3.2rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isActive }) => (isActive ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0a2f35;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #f56038;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 2rem;
  &:hover {
    color: #f56038;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #f56038;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
