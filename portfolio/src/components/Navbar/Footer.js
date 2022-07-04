
import React from 'react';
// import {  Link } from "react-router-dom";
import { Card, Navbar, Container, NavbarBrand } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";


export default function Navibar() {
  return (
      <Container className='bottom'>
    <div>  
    <Navbar>
        <Container>
            <NavbarBrand><a className="text-secondary" href='https://github.com/Bradleytevans' target="_blank" rel="noreferrer"><VscGithub size={35} /></a> <a className="text-secondary" href='https://www.linkedin.com/in/bradleytevans/' target="_blank" rel="noreferrer"><AiFillLinkedin size={35}/></a> <a className="text-secondary" href='https://stackoverflow.com/users/16393628/bradley-evans' target="_blank" rel="noreferrer"><BsStackOverflow size={35}/></a></NavbarBrand>
        </Container>
    </Navbar>
</div>
</Container>
  )
};
  