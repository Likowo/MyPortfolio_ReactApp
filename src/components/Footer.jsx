// Upload/Create component boilerplate using rfce
import { Link } from 'react-router-dom';
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <Link to="/linkedIn">
        <div>LinkedIn</div>
      </Link>
      <Link to="/calendy">
        <a href="https://calendly.com/amolinge17"> 
        <div >Calendy</div>
        </a>
      </Link>
      <Link to="/github">
        <div>GitHub</div>
      </Link>
    </div>
  )
}

export default Footer