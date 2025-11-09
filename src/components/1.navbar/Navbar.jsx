import React, { useRef, useState } from 'react'   
import './navbar.css'
import logo from '../../assets/dd.png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuopen from '../../assets/menuopen.svg'
import menuclose from '../../assets/menuclose.svg'

const Navbar = () => {

  

  const [menu,setMenu] = useState("home");     
  const menuRef = useRef();
  
  const openMenu = ()=> {
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=> {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menuopen} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menuclose} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt='' />:<></>} </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work' ><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt='' />:<></>}</li>
        </ul>
        <div className='nav-connection'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar