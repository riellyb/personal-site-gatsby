import React from 'react'

const GalleryImage = (props) => (
  <div style={{width: '50%'}}>
    <img onClick={props.onClick} style={{maxWidth: '100%', display: 'block'}} src={props.src} />
  </div>
)

export default GalleryImage