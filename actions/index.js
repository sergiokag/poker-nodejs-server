// Actions
export const PLAYER_CONNECTED = 'PLAYER_CONNECTED';
export const PLAYER_DISCONNECTED = 'PLAYER_DISCONNECTED';

export const ON_CARDS_REQUEST = 'ON_CARDS_REQUEST';
export const CARDS_REQUEST_SUCCESS = 'CARDS_REQUEST_SUCCESS';
export const CARDS_REQUEST_FAIL = 'CARDS_REQUEST_FAIL';

export const ON_RESPOND_TO_CLIENTS = 'ON_RESPOND_TO_CLIENTS';

// Action Creators
export const newConnectionAction = (id) => ({
    type: PLAYER_CONNECTED,
    payload: {
        id, // uuid
        isPlaying: false
    }
});
export const disConnectionAction = (playerID) => ({
    type: PLAYER_DISCONNECTED,
    payload: playerID
});
export const getCardsAction = num => ({
    type: ON_CARDS_REQUEST,
    payload: num
});
