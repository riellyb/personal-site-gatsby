import React from 'react'
import Link from 'gatsby-link'

const PortfolioItem = (props) => (
  <div className={'main-work-gallery-item'}>
    <a target="_blank" href={props.href}>
    	<h3>{props.title}</h3>
    	<img  style={{maxWidth: '100%', display: 'block'}} src={props.src} />
    </a>
  </div>
)

export default PortfolioItem