import React from 'react'

const GalleryImage = (props) => (
  <div className='main-image-gallery-image' style={{cursor: 'pointer'}}>
    <img onClick={props.onClick} style={{maxWidth: '100%', display: 'block'}} src={props.src} />
  </div>
)

export default GalleryImage