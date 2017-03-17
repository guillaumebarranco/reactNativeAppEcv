import { combineReducers, createStore } from 'redux';
import protagonists from './reducers/protagonists';
import filters from './reducers/filter';

let reducer = combineReducers({
	protagonists: protagonists,
	filters: filters
});

let store = createStore(reducer);

export default store;
