import React, { Component } from "react";
import { Animated, StyleSheet, View } from "react-native";

const ballY = new Animated.Value(0)
const ballX = new Animated.divide(ballY, 2)


export default class MathOperation extends Component {
  state = {
    ballY: ballY,
    ballX: ballX
  };

  componentDidMount() {
    Animated.decay(this.state.ballY, {
      velocity: 1,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            {
              top: this.state.ballY,
              left: this.state.ballX
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f00",
  },
});
