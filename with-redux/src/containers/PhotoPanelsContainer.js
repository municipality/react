import { connect } from 'react-redux';
import PhotoPanelList from '../components/PhotoPanelList';
import {fetchPhotoPanels} from '../actions';
import React, {Component} from 'react';

class PhotoPanelsContainer extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchPhotoPanels());
  }

  render() {
    return (
      <PhotoPanelList panels={this.props.panels} />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    panels: state.photopanels.panels || []
  }
}


export default connect(
  mapStateToProps
)(PhotoPanelsContainer);
