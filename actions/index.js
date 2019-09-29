import { drawCards } from "../utils";
import db from '../db/db';

// Actions
export const PLAYER_CONNECTED = 'PLAYER_CONNECTED';
export const PLAYER_DISCONNECTED = 'PLAYER_DISCONNECTED';
export const SOCKET_ADDED = 'SOCKET_ADDED';
export const SOCKET_REMOVED = 'SOCKET_REMOVED';

export const ON_CARDS_REQUEST = 'ON_CARDS_REQUEST';
export const CARDS_REQUEST_SUCCESS = 'CARDS_REQUEST_SUCCESS';
export const CARDS_REQUEST_FAIL = 'CARDS_REQUEST_FAIL';

export const ON_RESPOND_TO_CLIENTS = 'ON_RESPOND_TO_CLIENTS';

export const SYSTEM_REQUEST_FROM_CLIENT = '[SYSTEM] REQUEST_FROM_CLIENT';

export const START_GAME = 'START_GAME';
export const GAME_STARTED = 'GAME_STARTED';


// Action Creators
export const newConnectionAction = id => ({
    type: PLAYER_CONNECTED,
    payload: {
        balance: 1000,
        name: id,
        isPlaying: false,
        hand: drawCards(5, db).map( c => ({ ...c, flipped: true }) ) // tmp
    }
});
export const disConnectionAction = playerID => ({
    type: PLAYER_DISCONNECTED,
    payload: playerID
});
export const getCardsAction = num => ({
    type: ON_CARDS_REQUEST,
    payload: num
});
export const addSocketAction = socket => ({
    type: SOCKET_ADDED,
    payload: socket
});
export const removeSocketAction = socketID => ({
    type: SOCKET_REMOVED,
    payload: socketID
});
