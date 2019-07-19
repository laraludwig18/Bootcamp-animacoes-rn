import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export default class Interpolate extends Component {
  state = {
    ballY: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.ballY, { toValue: 300, duration: 1000 }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            {
              top: this.state.ballY,
              opacity: this.state.ballY.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0.2],
                extrapolate: 'clamp'
              })
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00'
  }
});
