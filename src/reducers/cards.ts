import {
  CARDS_REQUEST_SUCCESS,
  CARDS_REQUEST_FAIL
} from '../actions';

const initialState = [];

function cards(state = initialState, action) {

  switch (action.type) {

    case CARDS_REQUEST_SUCCESS:
      return [ ...action.payload ];

    case CARDS_REQUEST_FAIL:
    default:

      return state;

  }

};

export default cards;
