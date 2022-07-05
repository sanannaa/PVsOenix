import React from 'react'
import './RandDelement.css'
import photo from '../../assets/photo1656496318.jpeg'

const LatexImage = () => {
  return (
    <section className='lateximage'>
      <p>Five Parameter Model:</p>
      <p>
        The five parameter are{' '}
        <i>
          R<sub>s</sub> , R<sub>sh</sub> , A , I<sub>d</sub> and I<sub>ph</sub>
        </i>
      </p>
      <div className='lateximgwrapper'>
        <img src={photo} alt='' />
      </div>
    </section>
  )
}

export default LatexImage
