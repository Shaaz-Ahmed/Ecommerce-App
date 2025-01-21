import { createStore } from 'redux';
import rootReducers from './reducre';

const store = createStore(rootReducers);

export default store;