// Actions
export const PLAYER_CONNECTED = 'PLAYER_CONNECTED';
export const PLAYER_DISCONNECTED = 'PLAYER_DISCONNECTED';
export const BTN_PRESSED = 'BTN_PRESSED';

// Action Creators
export const newConnectionAction = () => ({ type: PLAYER_CONNECTED, payload: { id: '123', isPlaying: false } });
export const disConnectionAction = (playerID) => ({ type: PLAYER_DISCONNECTED, payload: playerID });
