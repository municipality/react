import React, {PropTypes} from 'react';

const PhotoPanel = ({src, text}) => (
  <div className='photo-panel' style={{
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    {text}
  </div>
);

PhotoPanel.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default PhotoPanel;
