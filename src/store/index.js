import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const initialState = {
    city: null
};

export const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));