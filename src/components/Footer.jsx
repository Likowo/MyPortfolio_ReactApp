// Upload/Create component boilerplate using rfce
import { Link } from "react-router-dom";
import React from "react";

 // logo img in rightside div tag //
  // Let us grow together leftside div//
        // 3 clickable spans for linkedIn (https://www.linkedin.com/in/ann-likowo-molinge-39576473/),Calendy ('
        https://calendly.com/amolinge17') and github (https://github.com/Likowo?tab=repositories)//

        {/* <div className="footer">
              <div className="logoIcon">
                <img src=" logo icon here" alt="" className="icon" />
              </div>
        </div> */}

function Footer() {
  return (
    <div className="footer">
      <span>Let us grow together. Connect Today.
       </span>
       <img src="http://www.clipartbest.com/cliparts/7ca/6g5/7ca6g54ei.gif" alt="" className="arrow"/>

       <div className="contactLinks" >
         <a href="https://www.linkedin.com/in/ann-likowo-molinge-39576473">
        <div>LinkedIn</div>
        </a>
       </div>
    
    <div className="contactLinks"> 
      <a href="https://calendly.com/amolinge17">
        <div>Calendy</div>
      </a>
    </div>
    
    <div className="contactLinks">
        <a href="https://github.com/Likowo?tab=repositories">
        <div>GitHub</div>
      </a> 
    </div>
     
    </div>
  );
}

export default Footer;
