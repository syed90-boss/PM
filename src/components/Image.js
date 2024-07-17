import React from 'react'
import syedImg from '../syed_image.jpg'
import syedBlazer from '../syed blazer img.jpg'

const Image = () => {
  return (
    <div className='image-class'>
        <img src={syedBlazer} style={{width : '200px',
            height : '180px'
        }} className='syed-image' />
    </div>
  )
}

export default Image