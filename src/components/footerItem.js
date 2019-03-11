import React from 'react';

const FooterItem = props => (
    <div className="footer-item">
        <a target="_blank" rel="noopener noreferrer" href={props.href}>
            <img src={props.image} alt={props.alt} />
        </a>
    </div>
);

export default FooterItem;
