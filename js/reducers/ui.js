import { createReducer } from 'redux-act';
import u from 'updeep';

import { switchLocale } from 'actions/ui';

const initialState = {
  locale: 'it',
};

export default createReducer({
  [switchLocale]: (state, { locale }) => u({ locale }, state),
}, initialState);
