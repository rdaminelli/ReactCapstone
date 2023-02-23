import React from 'react'
import postifyLogo from "../images/postifyLogo.png"
import { Link } from "react-router-dom"

 function Nav () {
  return (
    <div className='nav'>
        <div className='card'>
            <div className='icon'>
              <img src={postifyLogo} alt="" />
            </div>
            <div className='links'>
              <Link className="nav-link" to="/?cat=food">Food</Link>
              <Link className="nav-link" to="/?cat=travel">Travel</Link>
              <Link className="nav-link" to="/?cat=lifestyle">Lifestyle</Link>
              <Link className="nav-link" to="/?cat=photography">Photography</Link>
              <Link className="nav-link" to="/?cat=personal">Personal</Link>
              <Link className="nav-link" to="/?cat=music">Music</Link>
              <span>Rafael</span>
              <span>Login/out</span>
              <span>
                <Link className="nav-link" to="/text">Postify</Link>
              </span>
            </div>
        </div>
    </div>
  )
}

export default Nav