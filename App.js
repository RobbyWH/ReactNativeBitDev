/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Accordion} from '@robbywh/cross-platform.base-ui.react-native.accordion';
import {Item} from '@robbywh/cross-platform.api.accordion';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const colorsList = [
    ['Red', '01'],
    ['Blue', '02'],
    ['Green', '03'],
  ].map(color => new Item(color[0], color[1]).toObject());

  return (
    <SafeAreaView style={backgroundStyle}>
      <Accordion elementList={colorsList} />
    </SafeAreaView>
  );
};

export default App;
