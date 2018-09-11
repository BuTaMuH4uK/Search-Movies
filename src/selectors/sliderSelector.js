import { createSelector } from 'reselect';

const navigation = state => state.navigation;

const changeValue = (navigation) => {
  
}

const sliderSelector = createSelector(
  navigation,
  changeValue
)

export default sliderSelector;
