import { combineReducers } from 'redux'
import {
  LOAD_PHOTO_PANEL, RECEIVE_PHOTO_PANEL
} from './actions'

function photopanels(state = {
  isLoading: false,
  panels: []
}, action) {
  switch(action.type) {
    case LOAD_PHOTO_PANEL: {
      //Object.assign appends state properties all args to first arg
      return Object.assign({}, state, {
        isLoading: true
      });
    }
    case RECEIVE_PHOTO_PANEL: {
      return Object.assign({}, state, {
        isLoading: false,
        panels: action.panels
      });
    }
    default:
      return state;
  }
}

const PhotoPanelsReducer = combineReducers({photopanels});
export default PhotoPanelsReducer;
