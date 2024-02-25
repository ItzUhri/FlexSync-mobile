import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';

class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleValue: new Animated.Value(1),
    };
  }

  handlePressIn = () => {
    Animated.spring(this.state.scaleValue, {
      toValue: 0.8,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.spring(this.state.scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { scaleValue } = this.state;
    const buttonScale = {
      transform: [{ scale: scaleValue }],
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.button, buttonScale]}>
            <Text style={styles.buttonText}>Press Me</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default Testing;