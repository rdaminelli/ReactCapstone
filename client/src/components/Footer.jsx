import React from 'react'
import postifyLogo from "../images/postifyLogo.png"

const Footer = () => {
  return (
    <div className='foot'>
      <img src={postifyLogo} alt="" />
      <h5>Copyright &copy;2023</h5>
    </div>
  )
}

export default Footer