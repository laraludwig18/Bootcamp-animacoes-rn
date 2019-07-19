import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export default class Loop extends Component {
  state = {
    ballX: new Animated.Value(0),
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.ballY, {
          duration: 500,
          toValue: 200,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballX, {
          duration: 500,
          toValue: 200,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballY, {
          duration: 500,
          toValue: 0,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballX, {
          duration: 500,
          toValue: 0,
        }),

        Animated.delay(200),
      ]),
      {
        iterations: 3,
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            {
              top: this.state.ballY,
              left: this.state.ballX,
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
