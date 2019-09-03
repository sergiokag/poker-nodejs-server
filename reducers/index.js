import {
  NEW_CONNECTION_ACTION,
} from '../actions';

const initialState = { connectedPersons: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_CONNECTION_ACTION:
      return Object.assign({}, state, {
        connectedPersons: state.connectedPersons + action.payload
      });
    default:
      return state;
  }
};

export default reducer;