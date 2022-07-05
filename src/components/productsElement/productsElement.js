import React from 'react'
import './productsElement.css'
import photo1 from '../../assets/three para.svg'
import photo2 from '../../assets/four para.svg'
import photo3 from '../../assets/five para.svg'
import equvilanet from '../../assets/equivalent PV.svg'
import solar from '../../assets/solar model.svg'

const ProductsElement = () => {
  return (
    <div className='products'>
      <div>
        <p>Three parameter based model</p>
        <div className='productsimgwrapper'>
          <img src={photo1} alt='' />
        </div>
      </div>
      <div>
        <p>Four parameter based model</p>
        <div className='productsimgwrapper'>
          <img src={photo2} alt='' />
        </div>
      </div>
      <div>
        <p>Five parameter based model</p>
        <div className='productsimgwrapper'>
          <img src={photo3} alt='' />
        </div>
      </div>
      <div>
        <p>Equivalent PV cell model</p>
        <div className='productsimgwrapper'>
          <img src={equvilanet} alt='' />
        </div>
      </div>
      <div>
        <p>Solar thermal trough power plant with thermal storage</p>
        <div className='productsimgwrapper'>
          <img src={solar} alt='' />
        </div>
      </div>
    </div>
  )
}

export default ProductsElement
