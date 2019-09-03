// Actions
export const PLAYER_CONNECTED = 'PLAYER_CONNECTED';
export const BTN_PRESSED = 'BTN_PRESSED';

// Action Creators
export const newConnectionAction = () => ({ type: PLAYER_CONNECTED, payload: { id: '123', isPlaying: false } });
