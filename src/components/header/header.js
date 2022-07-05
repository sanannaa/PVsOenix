import React, { useEffect, useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = ({ homepageBoolean }) => {
  let navigate = useNavigate()
  const [state, setstate] = useState(false)
  const [home, sethome] = useState(false)

  useEffect(() => {
    if (homepageBoolean) {
      sethome(true)
      document.querySelector('nav').style.backgroundColor = 'transparent'
    }
  }, [])

  function handleClick() {
    if (home) {
      if (!state) {
        setstate(true)
        document.querySelector('.menu div:nth-child(2)').style.display = 'none'
        document.querySelector('.menu div:nth-child(1)').style.transform =
          'rotate(45deg) translate(10px, 5px)'
        document.querySelector('.menu div:nth-child(3)').style.transform =
          'rotate(135deg)'
        document.querySelector('.menu-links').style.transform = 'translateX(0%)'
        document.querySelector('nav').style.backgroundColor = '#000000'
        document.body.style.overflow = 'hidden'
      } else {
        setstate(false)
        document.querySelector('.menu div:nth-child(2)').style.display = 'block'
        document.querySelector('.menu div:nth-child(1)').style.transform =
          'rotate(0deg) translate(0px, 0px)'
        document.querySelector('.menu div:nth-child(3)').style.transform =
          'rotate(0deg) translate(0px, 0px)'
        document.querySelector('.menu-links').style.transform =
          'translateX(100%)'
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.body.style.overflow = 'visible'
      }
    }
    if (!home) {
      if (!state) {
        setstate(true)
        document.querySelector('.menu div:nth-child(2)').style.display = 'none'
        document.querySelector('.menu div:nth-child(1)').style.transform =
          'rotate(45deg) translate(10px, 5px)'
        document.querySelector('.menu div:nth-child(3)').style.transform =
          'rotate(135deg)'
        document.querySelector('.menu-links').style.transform = 'translateX(0%)'
        document.body.style.overflow = 'hidden'
      } else {
        setstate(false)
        document.querySelector('.menu div:nth-child(2)').style.display = 'block'
        document.querySelector('.menu div:nth-child(1)').style.transform =
          'rotate(0deg) translate(0px, 0px)'
        document.querySelector('.menu div:nth-child(3)').style.transform =
          'rotate(0deg) translate(0px, 0px)'
        document.querySelector('.menu-links').style.transform =
          'translateX(100%)'
        document.body.style.overflow = 'visible'
      }
    }
  }

  return (
    <section className='header'>
      <nav>
        <div> <div className="logowrapper"><img src={logo} alt="" /></div></div>
        <div onClick={handleClick} className='menu'>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
        </div>
      </nav>
      <div className='menu-links'>
        <ul>
          <li
            onClick={() => {
              navigate('/about')
              document.body.style.overflow = 'visible'
            }}
          >
            <a href='#'>
              <span>01</span> About
            </a>
          </li>
          <li
            onClick={() => {
              navigate('/insights')
              document.body.style.overflow = 'visible'
            }}
          >
            <a href='#'>
              <span>02</span> Insights
            </a>
          </li>
          <li
            onClick={() => {
              navigate('/productsandsolution')
              document.body.style.overflow = 'visible'
            }}
          >
            <a href='#'>
              <span>03</span>Products and Solutions
            </a>
          </li>
          <li
            onClick={() => {
              navigate('/faq')
              document.body.style.overflow = 'visible'
            }}
          >
            <a href='#'>
              <span>04</span>FAQs
            </a>
          </li>
          <li
            onClick={() => {
              navigate('/contactus')
              document.body.style.overflow = 'visible'
            }}
          >
            <a href='#'>
              <span>05</span>Contact Us
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header
