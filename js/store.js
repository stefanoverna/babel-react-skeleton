import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from 'reducers';

const reducer = combineReducers(reducers);

export default compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);
