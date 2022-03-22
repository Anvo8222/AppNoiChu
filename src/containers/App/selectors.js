import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);

const makeInputCurrent = () =>
  createSelector(selectGlobal, state => state.inputCurrent);
export { makeSelectGlobal, makeSelectTurn, makeInputCurrent };
