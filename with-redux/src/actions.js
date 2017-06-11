import fetch from 'isomorphic-fetch';

export const LOAD_PHOTO_PANEL = 'LOAD_PHOTO_PANEL'
export const RECEIVE_PHOTO_PANEL = 'RECEIVE_PHOTO_PANEL'

export function loadPhotoPanels(selection) {
  return {
    type: LOAD_PHOTO_PANEL,
    selection
  }
}

export function receivePhotoPanels(selection, json) {
  return {
    type: RECEIVE_PHOTO_PANEL,
    selection,
    panels: json,
    timestamp: Date.now()
  }
}

let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data'
});

let options = {
  mode: 'cors',
  header: header
};

export function fetchPhotoPanels(selection = 'all') {
  return function(dispatch) {
    dispatch(loadPhotoPanels(selection));

    return fetch('http://localhost:8000/api/getphotopanels', options)
      .then(response => response.json())
      .then(json => dispatch(receivePhotoPanels(selection, json)));
  }
}

export const CHANGE_ROUTE = 'CHANGE_ROUTE';

export function changeRoute(route = '/') {
  return {
    type: CHANGE_ROUTE,
    path: route
  }
}
