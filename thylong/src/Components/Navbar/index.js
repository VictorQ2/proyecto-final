import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Titulo,
} from './NavbarElements';

import ban from './images/Ban.jpg'
import styles from './css/index.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Titulo>Thylong</Titulo>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/events' activeStyle>
            Crea tu combo
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Colecciones
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Registrarse
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Ingresar</NavBtnLink>
        </NavBtn>
      </Nav>

       <figure>
        <div>
        <a>
          <img class='Banner' src={ban}>

          </img>
        </a>
        <h1 class='tituloBan'>
          Best sellers
        </h1>
        </div>
  
       </figure>

    </>
  );
};
  
export default Navbar;