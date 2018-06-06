import React, { Component } from 'react'
import Link from 'gatsby-link'
import Styles from '../sass/main.scss'
import Lightbox from 'react-images'
import GalleryImage from '../components/galleryImage'
import PortfolioItem from '../components/portfolioItem'
import ImageArray from '../images/imageArray'
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
				<h1>Brendan Rielly</h1>
			    <p>Welcome to your new Gatsby site.</p>
			    <p>Now go build something great.</p>
			    <Link to="/page-2/">Go to page 2</Link>

			    <section className='main-section'>
			    	<div className='main-work-gallery'>
			    		<PortfolioItem href={'https://www.backcountry.com/stories/on-the-road-in-california'} src={sogImage} title={'Backcountry State of Gold'} />
			    		<PortfolioItem href={'https://www.competitivecyclist.com/sc/road-bike-guide'} src={rbbgImage} title={'Competitive Cyclist Road Bike Buyer\'s Guide'} />
			    		<PortfolioItem href={'https://www.competitivecyclist.com/sc/jacket-buyers-guide'} src={jacketImage} title={'Competitive Cyclist Jacket Guide'} />
			    		<PortfolioItem href={'https://www.competitivecyclist.com/sc/andiamo'} src={andiamoImage} title={'Competitive Cyclist Andiamo'} />			    		
			    	</div>
			    </section>
			    <section className='main-section'>
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
			    
			    
			</div>
		);
	}
}

export default IndexPage
