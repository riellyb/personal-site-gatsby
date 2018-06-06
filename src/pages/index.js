import React, { Component } from 'react'
import Link from 'gatsby-link'
import Styles from '../sass/main.scss'
import Lightbox from 'react-images'
import GalleryImage from '../components/galleryImage'
import PortfolioItem from '../components/portfolioItem'
import ImageArray from '../images/imageArray'
import ContactForm from '../components/contactForm'
import sogImage from '../images/state-of-gold.jpg'
import rbbgImage from '../images/rbbg.jpg'
import jacketImage from '../images/cc-jacketguide.jpg'
import andiamoImage from '../images/cc-andiamo.jpg'

class IndexPage extends Component {
	constructor () {
		super();

		this.images = ImageArray;
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.images.length - 1) return;

		this.gotoNext();
	}
	render () {
		return (
			<div>
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.images}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					backdropClosesModal
					width={2000}
				/>
			    <section className='main-section'>
			    	<h2>Examples of My Work</h2>
			    	<div className='main-work-gallery'>
			    		<PortfolioItem 
				    		href={'https://www.backcountry.com/stories/on-the-road-in-california'}
				    		src={sogImage}
				    		title={<h3>Backcountry<br />State of Gold</h3>}
			    		/>
			    		<PortfolioItem 
				    		href={'https://www.competitivecyclist.com/sc/road-bike-guide'}
				    		src={rbbgImage}
				    		title={<h3>Competitive Cyclist<br />Road Bike Buyer's Guide</h3>}
			    		/>
			    		<PortfolioItem 
				    		href={'https://www.competitivecyclist.com/sc/jacket-buyers-guide'}
				    		src={jacketImage}
				    		title={<h3>Competitive Cyclist<br />Jacket Guide</h3>}
			    		/>
			    		<PortfolioItem 
				    		href={'https://www.competitivecyclist.com/sc/andiamo'}
				    		src={andiamoImage}
				    		title={<h3>Competitive Cyclist<br />Andiamo</h3>}
			    		/>			    		
			    	</div>
			    </section>
			    <section className='main-section'>
			    	<h2>Photography</h2>
				    <div className='main-image-gallery'>
				    	{this.images.map( (image, index) => {
				    		return  <GalleryImage
				    					key={index}
				    					src={image.src}
				    					onClick={() => this.openLightbox(index, event)}
				    				/>
				    	})}

				    </div>
			    </section>
			    <section className='main-section'>
			    	<h2>Contact</h2>
			    	<ContactForm />
			    </section>		    
			    
			</div>
		);
	}
}

export default IndexPage
