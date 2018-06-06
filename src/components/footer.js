import React from 'react'
import FooterItem from '../components/footerItem'
import gitHubLogo from '../images/GitHub-Mark-64px.png'
import linkedInLogo from '../images/In-Black-66px-TM.png'
import instagramLogo from '../images/insta.png'

const Footer = () => (
    <footer className='footer'>
        <FooterItem image={gitHubLogo} href='https://github.com/riellyb' />
        <FooterItem image={linkedInLogo} href='https://www.linkedin.com/in/brendan-rielly-5a30a821/' />
        <FooterItem image={instagramLogo} href='https://www.instagram.com/brielly1421/' />
    </footer>
)

export default Footer