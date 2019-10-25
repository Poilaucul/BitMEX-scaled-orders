import {
  WEBSOCKET_BROKEN,
  WEBSOCKET_CLOSED,
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_OPEN,
  WEBSOCKET_SEND,
  WEBSOCKET_ERROR
} from '@giantmachines/redux-websocket';

export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export type POST_ORDER_SUCCESS = typeof POST_ORDER_SUCCESS;

export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';
export type POST_ORDER_ERROR = typeof POST_ORDER_ERROR;

export const POST_ORDER_LOADING = 'POST_ORDER_LOADING';
export type POST_ORDER_LOADING = typeof POST_ORDER_LOADING;

export const PREVIEW_ORDERS_SUCCESS = 'PREVIEW_ORDERS_SUCCESS';
export type PREVIEW_ORDERS_SUCCESS = 'PREVIEW_ORDERS_SUCCESS';
//===========================================================
const WEBSOCKET_PREFIX: string = 'REDUX_WEBSOCKET';

export const REDUX_WEBSOCKET_BROKEN = `${WEBSOCKET_PREFIX}::${WEBSOCKET_BROKEN}`;
export type REDUX_WEBSOCKET_BROKEN = typeof REDUX_WEBSOCKET_BROKEN;

export const REDUX_WEBSOCKET_OPEN = `${WEBSOCKET_PREFIX}::${WEBSOCKET_OPEN}`;
export type REDUX_WEBSOCKET_OPEN = typeof REDUX_WEBSOCKET_OPEN;

export const REDUX_WEBSOCKET_CLOSED = `${WEBSOCKET_PREFIX}::${WEBSOCKET_CLOSED}`;
export type REDUX_WEBSOCKET_CLOSED = typeof REDUX_WEBSOCKET_CLOSED;

export const REDUX_WEBSOCKET_MESSAGE = `${WEBSOCKET_PREFIX}::${WEBSOCKET_MESSAGE}`;
export type REDUX_WEBSOCKET_MESSAGE = typeof REDUX_WEBSOCKET_MESSAGE;

export const REDUX_WEBSOCKET_CONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_CONNECT}`;
export type REDUX_WEBSOCKET_CONNECT = typeof REDUX_WEBSOCKET_CONNECT;

export const REDUX_WEBSOCKET_DISCONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_DISCONNECT}`;
export type REDUX_WEBSOCKET_DISCONNECT = typeof REDUX_WEBSOCKET_DISCONNECT;

export const REDUX_WEBSOCKET_SEND = `${WEBSOCKET_PREFIX}::${WEBSOCKET_SEND}`;
export type REDUX_WEBSOCKET_SEND = typeof REDUX_WEBSOCKET_SEND;

export const REDUX_WEBSOCKET_ERROR = `${WEBSOCKET_PREFIX}::${WEBSOCKET_ERROR}`;
export type REDUX_WEBSOCKET_ERROR = typeof REDUX_WEBSOCKET_ERROR;

export const REDUX_WEBSOCKET_LOADING: string = 'REDUX_WEBSOCKET_LOADING'; // :string fixes internal action error
export type REDUX_WEBSOCKET_LOADING = typeof REDUX_WEBSOCKET_LOADING;

export const INTERNAL_CLEAR_MESSAGE_LOG: string = 'INTERNAL::CLEAR_MESSAGE_LOG';
export type INTERNAL_CLEAR_MESSAGE_LOG = typeof INTERNAL_CLEAR_MESSAGE_LOG;
