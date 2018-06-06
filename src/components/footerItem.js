import React from 'react'

const FooterItem = (props) => (
    <div className='footer-item'>
    	<a target="_blank" href={props.href}><img src={props.image} /></a>
    </div>
)

export default FooterItem