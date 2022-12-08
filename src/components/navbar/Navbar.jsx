import React, {useState} from 'react'
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assests/GPT-3.svg'

const Menu =() => (
  <>
    <li><a href="Home">Home</a></li>
    <li><a href="wpt3">What is GPT?</a></li>
    <li><a href="possibility">Open AI</a></li>
    <li><a href="features">Case Studies</a></li>
    <li><a href="blog">Library</a></li>
  </>
)

const Account = () => (
  <>
      <button id='sign-in'>Sign In</button>
      <button id='sign-up'>Sign Up</button>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false)//use video to crosscheck
  return (
    <header className='gpt3__navbar'>
      <nav className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <ul className="gpt3__navbar-links_container">
          <Menu/>
        </ul>
      </nav>
      <div className="gpt3__navbar-sign">
        <Account/>
      </div>
      
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <ul className="gpt3__navbar-menu_container-links">
              <Menu/>
            </ul>
            <div className="gpt3__navbar-menu_container-links-sign">
              <Account/>
            </div>
            
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar