import React from 'react'
import Header from '../components/header/header'
import LandingElement from '../components/landingElement/landingElement'
import HomepageElement from '../components/homepageElement/homepageElement'
import PartnershipElement from '../components/partnershipElement/partnershipElement'
import ContactForm from '../components/contactForm/contactForm'
import Footer from '../components/footer/footer'

const Homepage = () => {
  return (
    <>
      <Header homepageBoolean={true} />
      <LandingElement />
      <HomepageElement />
      <Footer></Footer>
    </>
  )
}

export default Homepage
