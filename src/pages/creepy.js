import React, { Component } from 'react';

const creepy = () => {
  return (
    <React.Fragment>
      <script src="https://creepyface.io/creepyface.js" />
      <div className="main">
        <img
          data-creepyface
          src="img/serious.jpeg"
          data-src-hover="img/hover.jpeg"
          data-src-look-0="img/0.jpeg"
          data-src-look-45="img/45.jpeg"
          data-src-look-90="img/90.jpeg"
          data-src-look-135="img/135.jpeg"
          data-src-look-180="img/180.jpeg"
          data-src-look-225="img/225.jpeg"
          data-src-look-270="img/270.jpeg"
          data-src-look-315="img/315.jpeg"
        />
      </div>
    </React.Fragment>
  );
};

export default creepy;
