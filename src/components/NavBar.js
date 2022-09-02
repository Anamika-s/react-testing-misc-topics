import React from 'react'
import {Link} from 'react-router-dom'


export default function NavBar() {
  return (
    <div> 
  <nav>
    <Link to="/aboutus" > About Us  </Link>
    <Link to="/contactus" > Conatct Us  </Link>
  </nav>

    </div>
  )
}
