import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <img src='Components/Navbar/logo.jpg' width='100px' height='100px'></img>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/events' activeStyle>
            Productos
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Domicilios
          </NavLink>
          <NavLink to='/team' activeStyle>
            Atencion al cliente
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Comentarios
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Registrarse
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Ingresar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;