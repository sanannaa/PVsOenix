import React from 'react'
import './FAQ.css'

const FAQ = () => {
  return (
    <section className='faq'>
      <div className='c'>
        <input type='checkbox' id='faq-1' />
        <h1>
          <label for='faq-1'>What Is This ?</label>
        </h1>
        <div className='p'>
          <p>This a very very simple accordion.</p>
        </div>
      </div>
      <div className='c'>
        <input type='checkbox' id='faq-2' />
        <h1>
          <label for='faq-2'>With Pure Css ?</label>
        </h1>
        <div className='p'>
          <p>Yes with pure CSS and HTML.</p>
        </div>
      </div>
      <div className='c'>
        <input type='checkbox' id='faq-3' />
        <h1>
          <label for='faq-3'>Where did you get inpiration ?</label>
        </h1>
        <div className='p'>
          <p>I was inpired by an article on css-tricks. </p>
        </div>
      </div>
      <div className='c'>
        <input type='checkbox' id='faq-4' />
        <h1>
          <label for='faq-4'>Where did you get inpiration ?</label>
        </h1>
        <div className='p'>
          <p>I was inpired by an article on css-tricks.</p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
