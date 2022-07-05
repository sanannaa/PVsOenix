import React from 'react'
import './partnershipElement.css'
import buetLogo from '../../assets/BUET_LOGO 1.png'

const PartnershipElement = () => {
  return (
    <section className='partnershipWrapper'>
      <div>Partnered With</div>
      <div>
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
        <img src={buetLogo} alt='' />
      </div>
    </section>
  )
}

export default PartnershipElement
