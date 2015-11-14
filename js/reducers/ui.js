import { createReducer } from 'redux-act';
import { boot } from 'actions/ui';
import u from 'updeep';

const initialState = {
  booted: false,
};

export default createReducer({
  [boot]: (state) => u({ booted: true }, state),
}, initialState);
