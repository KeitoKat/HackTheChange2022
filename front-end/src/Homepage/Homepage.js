import React, { Fragment, useState } from "react";
import Logo from './Logo.js';
import { useNavigate } from "react-router-dom";






const Homepage = () => {
    
  const navigate = useNavigate();
  
  const navigateToUsers = () => {
  
    navigate('/Users');
  };
  const navigateToHosts = () => {
  
    navigate('/Login');
  };


  return (
        <div className="App">
          <nav>
            <div id="Icons">
              <Logo></Logo>
              <Logo></Logo>
              <Logo></Logo>
            </div>
          </nav>
          <header className="App-header">
            <table>
              <tr>
                <td colspan='3'><b>Welcome!</b> Are you a</td>
              </tr>
              <tr>
                <td><button onClick={navigateToUsers}>guest</button></td>
                <td><p> or a </p></td>
                <td><button onClick={navigateToHosts}>host</button></td>
              </tr>
            </table>
          </header>
        </div>
      );
}

export default Homepage;