import React from 'react';
import './theSardines.css';
import Header from './Header';
import NavBar from './NavBar';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Music from "./Music";
import Sale from "./Sale";
import Dates from "./Dates";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

  const App = () => {
    return (
      <div>
        <div className='topBar'>
          <div>
            <Header textcolor = "olive" textcolor2 = "beige" textcolor3 = "beige"/>
          </div>
          <div>
            <NavBar textcolor = "beige" textcolor2 = "beige" textcolor3 = "beige"/>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/Music" component={Music}/>
          <Route path="/Sale" component={Sale}/>
          <Route path="/Dates" component={Dates}/>
        </Switch>
        <div className='footer'>
          <Footer textcolor = "beige" textcolor2 = "teal" textcolor3 = "olive"/>
        </div>
      </div>
    );
  }

export default App;
