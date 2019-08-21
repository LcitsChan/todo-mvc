import * as VisivilityTypes from '../constants/VisibilityType';
import { createAction } from 'redux-actions';

export const showAll = createAction<void>(VisivilityTypes.SHOW_ALL, () => {});

export const showActive = createAction<void>(
  VisivilityTypes.SHOW_ACTIVE,
  () => {}
);

export const showCompleted = createAction<void>(
  VisivilityTypes.SHOW_COMPLETED,
  () => {}
);
