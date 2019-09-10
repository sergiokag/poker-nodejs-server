// Core
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
