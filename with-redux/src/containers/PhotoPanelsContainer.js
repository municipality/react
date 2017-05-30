import { connect } from 'react-redux';
import PhotoPanelList from '../components/PhotoPanelList';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import PhotoPanelsReducer from '../reducers';
import {fetchPhotoPanels} from '../actions';
import React, {Component} from 'react';

let photoPanels = [{
  id: 1,
  src: 'url(intro-image.jpg)',
  text: ''
}];

const getPhotoPanels = () => {
  return [{
    id: 1,
    src: 'url(intro-image.jpg)',
    text: ''
  }];

}

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
  debugger
  return {
    panels: state.photopanels.panels || []
  }
}


export default connect(
  mapStateToProps
)(PhotoPanelsContainer);
