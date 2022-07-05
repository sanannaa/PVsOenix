import React from 'react'
import './RandDelement.css'
import photo from '../../assets/photo1656496394.jpeg'

const LatexImage3 = () => {
  return (
    <section className='lateximage'>
      <p>Three Parameter Model:</p>
      <p>
        The three parameter are{' '}
        <i>
          A , I<sub>d</sub> and I<sub>ph</sub>
        </i>
      </p>
      <div className='lateximgwrapper'>
        <img src={photo} alt='' />
      </div>
    </section>
  )
}

export default LatexImage3
