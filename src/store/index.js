import { createStore } from 'redux';
import { reducer } from '../reducers/city';

const initialState = {
    city: 'Santiago,cl'
};

export const store = createStore(reducer, initialState);