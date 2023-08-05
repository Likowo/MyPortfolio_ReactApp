//Upload(Create) component boilerplate using rfce
import { Link} from "react-router-dom";
import React from "react";

// To change the URL bar, we need some links.So lets create a navigation using the link component (<link> </Link>) with the pathname and target property ( target="_blank")

//NB: If you want to open an external link to the current tab, the most straightforward way is to use the native anchor tag in HTML (<a>) without a target property ( target="_blank")

function NavBar(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/projects">
        <div>PROJECTS</div>
      </Link>
      <Link to="/resume">
        <div>RESUME</div>
      </Link>
      <Link to="/inconstruction">
        <div>INCONSTRUCTION</div>
      </Link>
      <Link to="/contact">
        <div>CONTACT</div>
      </Link>
    </div>
  );
}

export default NavBar;
