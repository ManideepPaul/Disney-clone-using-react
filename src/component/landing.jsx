import React from "react";
import "./landing.css";
import { stateContext} from '../helpers/context';
import { useContext, useState } from "react";

const Landing = () => {

	const { setState } = useContext(stateContext)

  return (
    <div className="Landing">
      <nav className="navbar">
        <img src="assets/images/logo.svg" alt="" />
        <button className="btn">LOGIN</button>
      </nav>
	  <div className="mainSection">
		  <div className="allContents">
				<img src="assets/images/cta-logo-one.svg" alt="" />
				<button className="mainBtn" onClick={() => setState('home')}>GET ALL THERE</button>
				<p>Get Premier Access to Raya and the Last Dragon for an aditional fee with a Disney+ subscription.</p>
				<p>As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
				<img className="png" src="assets/images/cta-logo-two.png" alt="" />	  
		  </div>
	  </div>
    </div>
  );
};

export default Landing;
