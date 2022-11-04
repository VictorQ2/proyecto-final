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
        <Bars />
        <Titulo>Thylong</Titulo>
        <NavMenu>

          <NavLink to='/' activeStyle>
            Home
          </NavLink>

          <NavLink to='/events' activeStyle>
            Catalogo
          </NavLink>

          <NavLink to='/AnnualReport' activeStyle>
            Contactanos
          </NavLink>


        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Instagram</NavBtnLink>
        </NavBtn>
      </Nav>
      <br></br>

      <div class="h-auto mb-2 bg-dark">
        <div class="Banner"></div>
        <div class="tituloBan lead p-3 mb-2 bg-dark text-white h-auto">Coleccion Noviembre 2022</div>
      </div>

      <div class="flex">
        <Reactplayer width="450px" height="1200px" class="video" url={video} autoplay loop controls></Reactplayer>
        <div class="foto1">

        </div>
        <div class="foto2">

        </div>
        <div class="foto3">

        </div>
        <div class="foto4">

        </div>
        <div class="foto5">

        </div>
        <div class="foto6">

        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer class="pie-pagina">
        <div class="grupo-1">
          <div class="box">
            <figure>

            </figure>
          </div>
          <div class="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>ThyLong es una empresa independiente lista para satistafacer tus necesidades</p>
            <p>Recuerda lo más importante, siempre facha, nunca infacha</p>
          </div>
          <div class="box">
            <h2>SIGUENOS</h2>
            <div class="red-social">
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>
          </div>
        </div>
        <div class="grupo-2">
          <small>&copy; 2022 <b>ThyLong</b> - Todos los Derechos Reservados.</small>
        </div>
      </footer>
    </>
  );
};

export default Navbar;