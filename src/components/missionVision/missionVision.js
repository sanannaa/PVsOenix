import React from 'react'
import './missionVision.css'
import svg from '../../assets/creativity-svgrepo-com 1.svg'
import svg1 from '../../assets/leadership-svgrepo-com 1.svg'
import svg2 from '../../assets/service-svgrepo-com 1.svg'
import svg3 from '../../assets/business-deal-svgrepo-com 1.svg'
import svg4 from '../../assets/quality-medal-svgrepo-com 1.svg'

const MissionVision = () => {
  return (
    <div className='missionVision'>
      <div className='missionpara'>
        <div>Our Mission and Vision</div>
        <div>
          Our Vision is to be the most creative and flexible service providers
          to fables, sellers, customers, with a view to erase power load of the
          nation and beyond.Our mission is to be the trusted design and model
          provider of the global PV and solar designing industry for years to
          come, we just started.
        </div>
      </div>
      <div className='icondisplay'>
        <div>
          <img src={svg} alt='' />
          <p>Creativity</p>
          <p>
            Creativity is intelligence having fun. We beileve in the creativity
            of our model
          </p>
        </div>
        <div>
          <img src={svg1} alt='' />
          <p>Leadership</p>
          <p>
            We believe our services can transform technology leadership for the
            good of employee and customers
          </p>
        </div>
        <div>
          <img src={svg2} alt='' />
          <p>Service Oriented</p>
          <p>Our team aim to provide the best support with constant support.</p>
        </div>
        <div>
          <img src={svg3} alt='' />
          <p>Business</p>
          <p>
            With cost effectivity, we believe in our business points of viewcan
            grow technology and business field with arise of linear model.{' '}
          </p>
        </div>
        <div>
          <img src={svg4} alt='' />
          <p>Excellence</p>
          <p>
            We believe in the excellence of our solution and our research based
            model can scintillant the nation and beyond{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
