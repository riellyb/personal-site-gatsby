import React from 'react'
import Link from 'gatsby-link'

const PortfolioItem = (props) => (
	<div className='main-work-gallery-item'>
		<div className='main-work-content'>
		    <a target="_blank" href={props.href}>
		    	{props.title}
		    	<img  style={{maxWidth: '100%', display: 'block'}} src={props.src} />
		    </a>
		</div>
	</div>
)

export default PortfolioItem