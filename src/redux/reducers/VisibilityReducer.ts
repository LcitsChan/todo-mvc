import { handleActions } from 'redux-actions';
import * as VisivilityTypes from '../constants/VisibilityType';

export const visibilityReducer = handleActions<string, string>(
  {
    [VisivilityTypes.SHOW_ALL]: (state, action) => {
      return action.type;
    },
    [VisivilityTypes.SHOW_ACTIVE]: (state, action) => {
      return action.type;
    },
    [VisivilityTypes.SHOW_COMPLETED]: (state, action) => {
      return action.type;
    }
  },
  ''
);
