import React, { Component } from 'react'
import Link from 'gatsby-link'
import Styles from '../sass/main.scss'
import Lightbox from 'react-images'
import GalleryImage from '../components/galleryImage'
import PortfolioItem from '../components/portfolioItem'
import About from '../components/about'
import Skills from '../components/skills'
import ImageArray from '../images/imageArray'
import ContactForm from '../components/contactForm'
import sogImage from '../images/state-of-gold.jpg'
import rbbgImage from '../images/rbbg.jpg'
import jacketImage from '../images/cc-jacketguide.jpg'
import andiamoImage from '../images/cc-andiamo.jpg'
import axios from 'axios';
import { CloudinaryContext } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'brendanrielly'});

class IndexPage extends Component {
	constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
			images: [],
			lightboxImages: []
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
	componentDidMount() {
        // Request for images tagged portfolio-photos       
        axios.get('https://res.cloudinary.com/brendanrielly/image/list/portfolio-photos.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({images: res.data.resources},
					() => {
						let lightboxImages = [];
						this.state.images.map((image, index) => {
							let src = cloudinaryCore.url(image.public_id) + '.jpg'
							lightboxImages[index] = {src: src}
						});
						this.setState({
							lightboxImages : lightboxImages
						});
					}
				);
            });
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
			<div className="main">
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.state.lightboxImages}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					backdropClosesModal
					width={2000}
				/>
				<section className="main-section" id="about">
					<About />
					<h2 className="section-header">Skills</h2>
					<Skills />
				</section>
			    <section className="main-section" id="work">
			    	<h2 className="section-header">Examples of My Work</h2>
			    	<div className="main-work-gallery">
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
			    <section className="main-section" id="photos">
			    	<h2 className="section-header">Photography</h2>
				    <div className="main-image-gallery">
				    	<CloudinaryContext cloudName="brendanrielly">
					    	{this.state.images.map( (image, index) => {
					    		return  <GalleryImage
					    					key={image.public_id}
					    					id={image.public_id}
					    					onClick={(event) => this.openLightbox(index, event)}
					    				/>
					    	})}
					    </CloudinaryContext>
				    </div>
			    </section>
			    <section className="main-section" id="contact">
			    	<h2 className="section-header">Contact</h2>
			    	<ContactForm />
			    </section>		    
			    
			</div>
		);
	}
}

export default IndexPage
