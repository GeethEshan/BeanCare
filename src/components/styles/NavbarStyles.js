// src/components/styles/NavbarStyles.js
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
`;

export const NavLogo = styled.img`
  height: 50px;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.div`
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f4d03f;
    }
  }
`;
