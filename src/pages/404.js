import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
    <div>
        <h1>
            404<br />NOT FOUND
        </h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <Link to="/">Back to the Homepage</Link>
    </div>
);

export default NotFoundPage;
