import React from 'react';
import './portfolio.css';
import Header from './Header';
import NavBar from './NavBar';
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Bio from "./Bio";
import Contact from "./Contact";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

  const App = () => {
    return (
      <div className={"fullscreen-bg"}>
          <video loop muted autoPlay = "true" className={"fullscreen-bg__video"}>
            <source src={"bg.mp4"} type={"video/mp4"}/>
          </video>
        
        <div className='topBar'>
          <div className = {'headerdiv'}>
            <Header textcolor = "white" textcolor2 = "black" textcolor3 = "black"/>
          </div>
          <div className = {'navbardiv'}>
            <NavBar textcolor = "black" textcolor2 = "black" textcolor3 = "black"/>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/Skills" component={Skills}/>
          <Route path="/Bio" component={Bio}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
        <div className='footer'>
          <Footer textcolor = "white" textcolor2 = "white" textcolor3 = "white"/>
        </div>
        
      </div>
    );
  }

export default App;
