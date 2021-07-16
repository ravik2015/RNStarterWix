import {authorization, dashboard} from '../../../config';
import {navigatorPush} from '../../../config/navigationOptions';
import {ACTION_TYPES, BASE_URL, LOGIN_URL} from '../../../utils/constants';

import Toast from 'react-native-simple-toast';
export function login(requestObject, componentId) {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.LOGIN_REQUEST,
    });
    try {
      let response = await fetch(`${BASE_URL}${LOGIN_URL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestObject),
      });
      let data = await response.json();
      if (data) {
        if (data.status) {
          dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
            payload: data,
          });
          // if (data.license) {
          //   dashboard();
          // } else {
          //   navigatorPush({
          //     componentId: componentId,
          //     screenName: 'LicenseContainer',
          //     passProps: {},
          //   });
          // }
        } else {
          dispatch({
            type: ACTION_TYPES.LOGIN_ERROR,
            payload: data,
          });
          setTimeout(() => {
            Toast.showWithGravity(data.message, Toast.SHORT, Toast.BOTTOM);
          }, 300);
        }
      }
    } catch (error) {
      setTimeout(() => {
        Toast.showWithGravity(error, Toast.SHORT, Toast.BOTTOM);
      }, 300);
      dispatch({
        type: ACTION_TYPES.LOGIN_ERROR,
        payload: error,
      });
    }
  };
}

export function logout() {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.LOGOUT,
    });
    authorization();
  };
}
