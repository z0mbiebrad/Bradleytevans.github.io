import React from "react";
import './App.css';
import Navibar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";




export default function App() {
  return (
    <BrowserRouter>
    <StyledApp className="App">
        <StyledNavbarWrapper>
        <Navibar/>
        </StyledNavbarWrapper>
        <Routes>
            <Route path="/" element={AboutMe()} />
            <Route path="/React-Adapt-Improvise" element={AboutMe()} />
            <Route path="/Projects" element={Portfolio()} />
            <Route path="/ContactForm" element={ContactForm()} />
            <Route path="/Resume" element={Resume()} />
          </Routes>
      <Footer></Footer>
    </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div``;

const StyledNavbarWrapper = styled.div`
  width: 100%;
`;

