import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import '../sass/main.scss';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div style={{ minHeight: '100vh' }}>
                <Helmet
                    titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                    defaultTitle={data.site.siteMetadata.title}
                    meta={[
                        {
                            name: 'description',
                            content: 'Brendan Rielly, Front End Developer.'
                        },
                        {
                            name: 'keywords',
                            content:
                                'front end developer, portfolio, brendan rielly'
                        }
                    ]}
                />
                <Header siteTitle={data.site.siteMetadata.title} />
                <div>{children}</div>
                <Footer />
            </div>
        )}
    />
);

export default Layout;
