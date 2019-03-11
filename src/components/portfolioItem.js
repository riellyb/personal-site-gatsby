import React from 'react';

const PortfolioItem = props => (
    <div className="main-work-gallery-item">
        <div className="main-work-content">
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                {props.title}
                <img
                    style={{ maxWidth: '100%', display: 'block' }}
                    src={props.src}
                    alt={props.alt}
                />
            </a>
        </div>
    </div>
);

export default PortfolioItem;
