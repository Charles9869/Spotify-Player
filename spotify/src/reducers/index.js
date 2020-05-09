import { combineReducers } from 'redux';

import auth from './auth.reducer.js';
import artists from './artists.reducer';

export default combineReducers({ auth, artists });
