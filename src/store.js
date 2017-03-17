import { combineReducers, createStore } from 'redux';
import protagonists from './reducers/protagonists';
import filter from './reducers/filter';

let reducer = combineReducers({
	protagonists: protagonists,
	currentFilter: filter
});

let store = createStore(reducer);

export default store;
