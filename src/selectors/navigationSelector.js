import { createSelector } from 'reselect';

const navigation = state => state.navigation;

const navigationSelector = createSelector(
  navigation,
  navigation => navigation
);

export default navigationSelector;
