import React from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

const GalleryImage = (props) => (
    <div onClick={props.onClick} className='main-image-gallery-image' style={{cursor: 'pointer'}}>
        <Image style={{maxWidth: '100%', display: 'block'}} publicId={props.id} />
    </div>
)

export default GalleryImage