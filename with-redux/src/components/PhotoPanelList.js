import React, { PropTypes } from 'react'
import PhotoPanel from './PhotoPanel'

const PhotoPanelList = ({panels}) => {
  return (
    <div className='photo-panel-list'>
      {/* Map each panels object to a PhotoPanel */}
      {panels.map(panel =>
        <PhotoPanel key={panel.id} {...panel} />
      )}
    </div>
  );
}

PhotoPanelList.propTypes = {
  panels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string
  }))
}

export default PhotoPanelList;
