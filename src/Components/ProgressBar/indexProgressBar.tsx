import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {StyleProgressBar} from './styleProgressBar';

interface IPropsProgressBar {
  maxElements: number;
  currentPosition: number;
}

const ProgressBar: React.FC<IPropsProgressBar> = props => {
  const [widthProgress, setWidthProgress] = useState<number>(0);

  useEffect(() => {
    if (props.maxElements > 0) {
      const _width = (props.currentPosition / props.maxElements) * 100;

      if (_width < 5) {
        setWidthProgress(5);
      } else if (_width > 5 && _width < 100) {
        setWidthProgress(_width);
      } else {
        setWidthProgress(100);
      }
    } else {
      setWidthProgress(0);
    }
  }, [props.currentPosition, props.maxElements]);

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
            {
              width: `${widthProgress}%`,
            },
          ]}
        />
      </View>
      <Text
        style={
          StyleProgressBar.TextPercent
        }>{`${props.currentPosition} / ${props.maxElements}`}</Text>
    </View>
  );
};

export default ProgressBar;
