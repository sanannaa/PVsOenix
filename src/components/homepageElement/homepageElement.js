import React from 'react'
import './homepageElement.css'
import { useNavigate } from 'react-router-dom'

const HomepageElement = () => {
  let navigate = useNavigate()
  return (
    <section className='homepageElement'>
      <div>We’re moving forward with technologies</div>
      <div>
        With the specific scientific approaches, condition of national power
        grid, generation mix, environmental positive impact, carbon emission,
        cost analysis and demand, our team aim to provide the creative math
        modelling of PV cells and Solar model in order to reduce carbon emission
        with the operation flexibility, moderate plant costs and demands.
      </div>
      <a
        onClick={() => {
          navigate('/productsandsolution')
        }}
        href='#'
      >
        Check out our solution!
      </a>
    </section>
  )
}

export default HomepageElement
