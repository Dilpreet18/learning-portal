import React from "react";
import Navbar from "./components/Navbar";
//import { Switch, Route } from "react-router-dom";
import { Routes,Route } from "react-router";
import instal from "./components/Instal";
import Instal from "./components/Instal";
import PropStat from "./components/PropStat";
import Intro from "./components/Intro";
import Compo from "./components/Compo";
import Hook from "./components/Hook";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Wanna learn about </p>
        <h1> Technical Skills!!!</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>here you will get knowledge of ReactJs from scratch </p>
        <h1>Stay Connected for latest updates  </h1>
        <p>some people ask why should update to react 17.
          <br/> so here is the answer to it..
        </p>
        <p>React 17 will no longer attach event handlers at the document level. Instead, it will attach them to the root DOM container into which your React tree is rendered. Note: For this to work, both the version of React apps should be more than v17, which is why upgrading to v17 is needed, i.e. to make further upgrades easy. <br/> <i><b>further new question and ans regarding react I will update ASAP ..... </b></i>
</p>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to React Tutorial </p>
        <h1>Let's get started <br/> </h1>
        
         
         <a href="../Intro"><h1>Introduction</h1></a>
         <a href="../Instal"><h1>Installation</h1></a>
         <a href="../PropStat"><h1>Props Vs State</h1></a>
         <a href="../Compo"><h1>Components</h1></a>
         <a href="../Hook"><h1>Hook</h1></a>
         {/* <Link to= "../Intro" >Introduc</Link> */}
         {/* <Intro/> */}
         

      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>:)</p>
        <h1>Contact Page</h1>
        <p>email id : salujadilpreet17@gmail.com</p>
        <p> mobile number : xxxxx-xxxxx</p>
        <p>Linked-In ID: <a href=" https://www.linkedin.com/in/dilpreet-saluja-5776661b2"> https://www.linkedin.com/in/dilpreet-saluja-5776661b2 </a></p>
        
        <p>GITHUB ID : <a href="https://github.com/Dilpreet18?tab=repositories">https://github.com/Dilpreet18?tab=repositories </a> </p>
      </section>
    </>
  );
};


const App = () => {
  return (
    // <div className= "App">
    <Routes>
      <Route exact path="/" element= {<Home />}>
        
      </Route>

      <Route path="/about" element= {<About />}>
        
      </Route>

      <Route path="/service" element = {<Service />}>
        
      </Route>

      <Route path="/contact" element = {<Contact />}>
        
      </Route>

      <Route path = "/intro" element= {<Intro/>}>

      </Route>

      <Route path = "instal" element = {<Instal/>}>

      </Route>

      <Route path="/compo" element = {<Compo/>} >

      </Route>

      <Route path="/PropStat" element = {<PropStat/>} >

      </Route>

      <Route path="/Hook" element = {<Hook/>} >

      </Route>
    </Routes>
    
  );
};

export default App;
