import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './combine';

export default function configureStore() {
    return createStore(rootReducers, applyMiddleware(thunk))

}