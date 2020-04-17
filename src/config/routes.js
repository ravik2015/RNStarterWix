import {Navigation} from 'react-native-navigation';
import {App} from '../index';
export const registerScreens = (store, Provider) => {
  Navigation.registerComponent(`App`, () => App);
};
