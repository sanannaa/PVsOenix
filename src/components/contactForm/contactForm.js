import React, { useRef } from 'react'
import './contactForm.css'
import svg from '../../assets/contact_svg.svg'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
  const form = useRef()
  let navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_156srok',
        'template_2t835zu',
        form.current,
        '5cQGRaceew7LWSHpk'
      )
      .then(
        (result) => {
          console.log(result.text)
          navigate('/successmessage')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className='contactForm'>
      <div className='contactHeader'>Contact Us With Your Enquiries</div>
      <div className='contactInput'>
        <form ref={form} onSubmit={sendEmail}>
          <input name='requestname' type='text' placeholder='Name' required />
          <input name='email' type='email' placeholder='Email' required />
          <input
            name='number'
            type='text'
            placeholder='Phone Number'
            required
          />
          <input
            name='userenquiry'
            type='text'
            placeholder='Your Enquiry'
            required
          />
          <button type='submit'>Sent Your Enquiries </button>
        </form>
        <div className='contactImgWrapper'>
          <img src={svg} alt='' />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
