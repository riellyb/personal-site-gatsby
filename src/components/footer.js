import React from 'react';
import FooterItem from '../components/footerItem';
import gitHubLogo from '../images/GitHub-Mark-64px.png';
import linkedInLogo from '../images/In-Black-66px-TM.png';
import instagramLogo from '../images/insta.png';

const Footer = () => (
    <footer className="footer">
        <FooterItem
            image={gitHubLogo}
            href="https://github.com/riellyb"
            alt={'Github'}
        />
        <FooterItem
            image={linkedInLogo}
            href="https://www.linkedin.com/in/brendan-rielly-5a30a821/"
            alt={'LinkedIn'}
        />
        <FooterItem
            image={instagramLogo}
            href="https://www.instagram.com/brielly1421/"
            alt={'Instagram'}
        />
    </footer>
);

export default Footer;
