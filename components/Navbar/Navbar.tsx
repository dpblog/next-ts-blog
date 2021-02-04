import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../styles/globalStyles";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Nav.elements";

interface Props {}

const Navbar = (props: Props) => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <Nav>
        <NavContainer>
          <Link href="/" passHref>
            <NavLogo>
              <NavIcon />
              StackDraft
            </NavLogo>
          </Link>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} isActive={click}>
            <NavItem>
              <Link href="/" passHref>
                <NavLinks>Home</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about" passHref>
                <NavLinks>About</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact" passHref>
                <NavLinks>Contact</NavLinks>
              </Link>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <Link href="/sign-up" passHref>
                  <NavBtnLink>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                </Link>
              ) : (
                <Link href="/sign-up" passHref>
                  <NavBtnLink>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                </Link>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
