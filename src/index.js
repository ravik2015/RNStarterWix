import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/setup';
export const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#33ff00', fontWeight: 'bold', fontSize: 24}}>
          Hello World
        </Text>
      </View>
    </Provider>
  );
};
