/**
 * 
 * 列表页
 */
import React, { Component } from 'react'

import {
  Button
} from 'react-native'

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'HOME',
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back to home tab"
        onPress={() => goBack()}
      />
    )
  }
}
