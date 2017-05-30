import React, {PropTypes} from 'react';

const PhotoPanel = ({src, text}) => (
  <div className='photopanel' style={{
    backgroundImage: src,
    backgroundSize: 'cover'
  }}>
    {text}
  </div>
);

PhotoPanel.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default PhotoPanel;
