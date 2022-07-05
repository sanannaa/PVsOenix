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
        <div>Welcome to About Page !</div>
        <div>
          Click the following links to get redirected to the desired Page
        </div>
        <ul>
          <li
            onClick={() => {
              navigate('/overview')
            }}
          >
            <img src={arrow} alt='' />
            Overview of PVsOenix
          </li>
          <li
            onClick={() => {
              navigate('/missionandvalue')
            }}
          >
            <img src={arrow} alt='' />
            Mission and Values
          </li>
          <li
            onClick={() => {
              navigate('/executivepage')
            }}
          >
            <img src={arrow} alt='' />
            Executive Members
          </li>
          <li
            onClick={() => {
              navigate('/advisors')
            }}
          >
            <img src={arrow} alt='' />
            Advisors
          </li>
        </ul>
      </div>
    </section>
  )
}

export default RedirectingElement
