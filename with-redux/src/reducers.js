import { combineReducers } from 'redux'
import {
  LOAD_PHOTO_PANEL, RECEIVE_PHOTO_PANEL,
  CHANGE_ROUTE
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

function switchroute(state = {
  path: '/'
}, action) {
  switch(action.type) {
    case CHANGE_ROUTE: {
      return Object.assign({}, state, {
        active: action.path
      });
    }
    default:
      return state;
  }
}

const reducers = combineReducers({photopanels, switchroute});
export default reducers;
