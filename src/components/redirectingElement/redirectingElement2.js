import React from 'react'
import './redirectingElement.css'
import svg from '../../assets/redirectingSvg.svg'
import arrow from '../../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'

const RedirectingElement = () => {
  let navigate = useNavigate()

  return (
    <section className='redirectingElement'>
      <div className='redirectingImg'>
        <img src={svg} alt='' />
      </div>
      <div className='redirectingPara'>
        <div>Welcome to Products and Solution Page !</div>
        <div>
          Click the following links to get redirected to the desired Page
        </div>
        <ul>
          <li
            onClick={() => {
              navigate('/randd')
            }}
          >
            <img src={arrow} alt='' />
            Research and Development
          </li>
          <li
            onClick={() => {
              navigate('/products')
            }}
          >
            <img src={arrow} alt='' />
            Products
          </li>
        </ul>
      </div>
    </section>
  )
}

export default RedirectingElement
