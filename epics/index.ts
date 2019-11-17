// Core
import { combineEpics } from 'redux-observable';

// Epics
import { cardsRequestEpic } from './cardsRequestEpic';
import { respondToClientsEpic } from './respondToClients';
import { gameEpic } from './gameEpic';

const rootEpic = combineEpics(
  cardsRequestEpic,
  respondToClientsEpic,
  gameEpic,
);

export default rootEpic;
