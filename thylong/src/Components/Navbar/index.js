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
import Reactplayer from 'react-player';
import video from './images/video1.mp4';
  
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
            TikTok
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Instagram</NavBtnLink>
        </NavBtn>
      </Nav>
      <br></br>

      <div class="Banner"></div>
      <div class="tituloBan">Coleccion Noviembre 2022</div>
      <div class="flex">
        <Reactplayer width="450px" height="1200px" class="video" url={video} autoplay loop controls></Reactplayer>
        <div class="foto1">
          Candongas: $2USD
          </div>
        <div class="foto2">
          Dragons: $3USD
        </div>
        <div class="foto3">
          Cadenas: $3USD
        </div>
        <div class="foto4">
          WeedFace: $3USD
        </div>
        <div class="foto5">
          Aretas: $1USD
        </div>
        <div class="foto6">
          MoneyGap: $1USD
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="footer">

      </div>
    </>
  );
};
  
export default Navbar;