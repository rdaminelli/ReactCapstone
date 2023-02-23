import React from 'react'
import { GoTrashcan, GoPencil } from "react-icons/go";
import { Link } from "react-router-dom"

const Post = () => {
  return (
    <div className="post">
      <div className="content">
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
      
      <div classname="info">
        <span>John</span>
        <p>posted on jan 23, 2023</p>
      </div>
      <div className="edit">
        <Link to={`/text?edit=3`}><GoPencil/></Link>
        <GoTrashcan/>
      </div>
      <h1>text</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>  
      </div>
      <div className="menu"></div>
    </div>
  )
}

export default Post