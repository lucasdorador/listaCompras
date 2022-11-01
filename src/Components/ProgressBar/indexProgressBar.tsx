import React from 'react';
import {Text, View} from 'react-native';
import {StyleProgressBar} from './styleProgressBar';

// import { Container } from './styles';

const ProgressBar: React.FC = () => {
  return (
    <View style={StyleProgressBar.ContainerMain}>
      <View
        style={[
          StyleProgressBar.ContainerPB,
          StyleProgressBar.PropertysProgressBar,
        ]}>
        <View
          style={[
            StyleProgressBar.ProgressBar,
            StyleProgressBar.PropertysProgressBar,
          ]}
        />
      </View>
      <Text style={StyleProgressBar.TextPercent}>18/100</Text>
    </View>
  );
};

export default ProgressBar;
