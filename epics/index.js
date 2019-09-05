// Core
import { combineEpics } from 'redux-observable';

// Epics
import { cardsRequestEpic } from './cardsRequestEpic';
import { respondToClientsEpic } from './respondToClients';

const rootEpic = combineEpics(
  cardsRequestEpic,
  respondToClientsEpic,
);

export default rootEpic;
