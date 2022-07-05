import React from 'react'
import './overviewElement.css'
import pic from '../../assets/raphael-cruz-IwY-27ceRCA-unsplash 1.png'

const OverviewElement = () => {
  return (
    <div className='overviewElement'>
      <div className='imgwrapper'>
        <img src={pic} alt='' />
      </div>
      <div className='introtext'>Overview about PVsOenix</div>
      <div className='intropara'>
        Founded in 2022 and located in Dhaka, Bangladesh, PVsOenix is an online
        based hub of creativity of the technology and business with an exclusive
        focus on solar model and PV model. By choosing not to design,
        manufacture or market, out model under its own name, PVsOenix ensures
        that it never competes with its customers and sellers. And so, the key
        to our product has always been targeted to focus on the nation’s benefit
        and customer success.
      </div>
    </div>
  )
}

export default OverviewElement
