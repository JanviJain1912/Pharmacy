import React from "react";
import './App.scss';
import Header from './components/Header.js';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
// import List from "./components/List";
import Footer from "./components/Footer.js";
import Restaurant from "./components/Restaurant.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/>
          <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/>
          <Route path="/dashboard" element={
            <React.Fragment>
              <Banner />
              <Restaurant/>
            </React.Fragment>
          }/>
          <Route path="/restaurant" element={
            <React.Fragment>
              <Restaurant/>
            </React.Fragment>
          }/>
          <Route path="/about" element={
            <React.Fragment>
              <About/>
            </React.Fragment>
          }/>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App
