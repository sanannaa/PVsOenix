import React from 'react'
import './RandDelement.css'
import photo from '../../assets/photo1656496370.jpeg'

const LatexImage2 = () => {
  return (
    <section className='lateximage'>
      <p>Four Parameter Model:</p>
      <p>
        The four parameter are{' '}
        <i>
          R<sub>s</sub> , A , I<sub>d</sub> and I<sub>ph</sub>
        </i>
      </p>
      <div className='lateximgwrapper'>
        <img src={photo} alt='' />
      </div>
    </section>
  )
}

export default LatexImage2
