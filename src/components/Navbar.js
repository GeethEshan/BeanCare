import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const Nav = styled.nav`
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: ${props => (props.scrolled ? 'white' : 'transparent')};
  transition: background 0.3s;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const NavTitle = styled.h1`
  color: #000; /* Changed to black */
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  a {
    color: #000; /* Changed to black */
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #0056b3; /* Darker blue for hover effect */
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <LogoContainer>
        <Logo src={logo} alt="BeanCare Logo" />
        <NavTitle>BeanCare</NavTitle>
      </LogoContainer>
      <NavLinks>
        <NavLink><a href="#home">Home</a></NavLink>
        <NavLink><a href="#project-scope">Project Scope</a></NavLink>
        <NavLink><a href="#milestones">Milestones</a></NavLink>
        <NavLink><a href="#downloads">Downloads</a></NavLink>
        <NavLink><a href="#AboutUs">About Us</a></NavLink>
        <NavLink><a href="#contact-us">Contact Us</a></NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
