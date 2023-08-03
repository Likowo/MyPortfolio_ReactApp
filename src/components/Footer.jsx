// Upload/Create component boilerplate using rfce
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <span>Let us grow together. Connect Today.
       </span>
       <img src="http://www.clipartbest.com/cliparts/7ca/6g5/7ca6g54ei.gif" alt="" className="arrow"/>

       <div>
         <a href="https://www.linkedin.com/in/ann-likowo-molinge-39576473">
        <div>LinkedIn</div>
        </a>
       </div>
    
    <div> 
      <a href="https://calendly.com/amolinge17">
        <div>Calendy</div>
      </a>
    </div>
    
    <div>
        <a href="https://github.com/Likowo?tab=repositories">
        <div>GitHub</div>
      </a> 
    </div>
     
    </div>
  );
}

export default Footer;
