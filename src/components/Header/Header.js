import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  color: #333;
  background: #eee;
  margin-right: 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #ddd;
  }
`;

const Header = () => {
  return (
    <nav style={{marginTop:'40px'}}>
      <NavLink to="/">
        <Button>Produtos</Button>
      </NavLink>
      <NavLink to="/contato">
        <Button>Contato</Button>
      </NavLink>
    </nav>
  );
};

export default Header;
