import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducer from './Reducers/index';

const bindMiddleware = middleware => {
    return composeWithDevTools(applyMiddleware(...middleware));
};

const initStore = (initialState = {}) => {
    return createStore(reducer, initialState, bindMiddleware([thunk]));
};

export const wrapper = createWrapper(initStore, { debug: true });