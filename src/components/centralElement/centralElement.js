import React from 'react'
import './centralElement.css'
import PartnershipElement from '../partnershipElement/partnershipElement'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const CentralElement = () => {
  let navigate = useNavigate()
  return (
    <div className='centralElement'>
      <div className='herosection'>
        <h2>
          <img src={logo} alt='' />
        </h2>
        <p>Your one-stop solution for building a world</p>
        <p>
          PVsOenix aims to pave the way for innovative solution and invite you
          to step into the future and beyond.
        </p>
      </div>

      <div className='secondsection'>
        <h2>Insights into our sections</h2>
        <div className='cards'>
          <div className='main'>
            <ul className='cards'>
              <li className='cards_item'>
                <div className='card'>
                  <div className='card_image'>
                    <img src='https://picsum.photos/500/300/?image=10' />
                  </div>
                  <div className='card_content'>
                    <h2 class='card_title'>Power and Renewable Energy</h2>
                    <p className='card_text'>
                      Demo of pixel perfect pure CSS simple responsive card grid
                      layout
                    </p>
                    <button
                      className='btn card_btn'
                      onClick={() => {
                        navigate('/powerandrenewableenergy')
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </li>
              <li className='cards_item'>
                <div className='card'>
                  <div className='card_image'>
                    <img src='https://picsum.photos/500/300/?image=10' />
                  </div>
                  <div className='card_content'>
                    <h2 class='card_title'>Space and Aviation</h2>
                    <p className='card_text'>
                      Demo of pixel perfect pure CSS simple responsive card grid
                      layout
                    </p>
                    <button
                      className='btn card_btn'
                      onClick={() => {
                        navigate('/comingsoon')
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </li>
              <li className='cards_item'>
                <div className='card'>
                  <div className='card_image'>
                    <img src='https://picsum.photos/500/300/?image=10' />
                  </div>
                  <div className='card_content'>
                    <h2 class='card_title'>Biomedical and Healthcar</h2>
                    <p className='card_text'>
                      Demo of pixel perfect pure CSS simple responsive card grid
                      layout
                    </p>
                    <button
                      className='btn card_btn'
                      onClick={() => {
                        navigate('/comingsoon')
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PartnershipElement></PartnershipElement>
      <Footer></Footer>
    </div>
  )
}

export default CentralElement
