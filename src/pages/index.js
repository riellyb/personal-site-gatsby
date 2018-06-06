import React, { Component } from 'react'
import Link from 'gatsby-link'
import Lightbox from 'react-images'
import GalleryImage from '../components/galleryImage'
import PortfolioItem from '../components/portfolioItem'
import image1 from '../images/DSC01756.jpg'
import image2 from '../images/DSC03785.jpg'
import sogImage from '../images/state-of-gold.jpg'
import rbbgImage from '../images/rbbg.jpg'
import jacketImage from '../images/cc-jacketguide.jpg'
import andiamoImage from '../images/cc-andiamo.jpg'

class IndexPage extends Component {
	constructor () {
		super();

		this.images = 
			[{ src: image1}, { src: image2}]
		;
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
			<div className="section">
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

				/>
				<h1>Brendan Rielly</h1>
			    <p>Welcome to your new Gatsby site.</p>
			    <p>Now go build something great.</p>
			    <Link to="/page-2/">Go to page 2</Link>

			    <section className={'main-section'}>
			    	<div className={'main-work-gallery'}>
			    		<PortfolioItem href={'https://www.backcountry.com/stories/on-the-road-in-california'} src={sogImage} title={'Backcountry State of Gold'} />
			    		<PortfolioItem href={'https://www.competitivecyclist.com/sc/road-bike-guide'} src={rbbgImage} title={'Competitive Cyclist Road Bike Buyer\'s Guide'} />
			    		<PortfolioItem href={'https://www.competitivecyclist.com/sc/jacket-buyers-guide'} src={jacketImage} title={'Competitive Cyclist Jacket Guide'} />
			    		<PortfolioItem href={'https://www.competitivecyclist.com/sc/andiamo'} src={andiamoImage} title={'Competitive Cyclist Andiamo'} />			    		
			    	</div>
			    </section>
			    <section className={'main-section'}>
				    <div className={'main-image-gallery'}>
				    	{/*for(let i = 0; i < 12; i++) {

				    		<GalleryImage src={image1} onClick={() => this.openLightbox(0, event)} />
				    	}*/}

				    	<GalleryImage src={image1} onClick={() => this.openLightbox(0, event)} />
				    	<GalleryImage src={image2} onClick={() => this.openLightbox(1, event)} />
				    </div>
			    </section>
			    
			    
			</div>
		);
	}
}

export default IndexPage
