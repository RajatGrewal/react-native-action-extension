import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CustomActionExtension from './CustomActionExtension'
import RootContainer from './RootContainer'

type Props = {isActionExtension: boolean};

export default class App extends Component<Props> {
  static defaultProps = {
    isActionExtension: false
  };

  render() {
    return (
      (this.props.isActionExtension)? <CustomActionExtension/> : <RootContainer/>
    );
  }

}
