import { combineReducers } from 'redux';
import goals from '../reducers/goals';
import todos from '../reducers/todos';
import loading from '../reducers/loading';

export default combineReducers({
  todos,
  goals,
  loading
});
