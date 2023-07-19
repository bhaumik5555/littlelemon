import React from 'react'
import "./header.css"
import Logo from "../../assets/Images/Asset 9@4x.png"

const Header = () => {
  return (
    <section>
      <h2>Little Lemon</h2>
      <img src={Logo} alt='logo' id='logo'/>
    </section>
  )
}

export default Header