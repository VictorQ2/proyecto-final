import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav `
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  box-shadow: 0px 5px 5px 0px black;
  z-index: 12;
  /* Third Nav */
`;

export const Titulo = styled.h1
`
  background: white;
  width: 50px;
  font-size: 30px;
  height: 50px;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)
`
  background: white;
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: white;
  }
`;

export const Bars = styled(FaBars)
` 
  background: white;
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  background: white;
  align-items: center;
  margin-right: 24px;
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)
`
  border-radius: 4px;
  background: white;
  padding: 10px 22px;
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.3s;
    background: rgb(189,16,181);
    background: linear-gradient(90deg, rgba(189,16,181,1) 7%, rgba(189,191,34,1) 87%);
    color: white;
  }
`;