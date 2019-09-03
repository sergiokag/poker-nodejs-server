// Core
import { combineEpics } from 'redux-observable';

// Epics
import { cardsRequestEpic } from './cardsRequestEpic';

const rootEpic = combineEpics(
  cardsRequestEpic,
);

export default rootEpic;
