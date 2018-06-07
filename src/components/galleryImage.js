import React from 'react'
import { Image, Transformation } from 'cloudinary-react';

const GalleryImage = (props) => (
    <div onClick={props.onClick} className='main-image-gallery-image' style={{cursor: 'pointer'}}>
        <Image
        dpr="auto"
        responsive
        width="auto"
        style={{maxWidth: '100%', display: 'block'}}
        publicId={props.id}>
            <Transformation quality="auto" fetchFormat="auto" />
        </Image>
    </div>
)

export default GalleryImage