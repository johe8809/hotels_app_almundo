import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import Header from './components/Header';
import ListHotelsComponent from './components/ListHotelsComponent';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  static navigationOptions = {
    header: null
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenu(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    return (
      <View style = { styles.container }>
        <SideMenu menu = { null } isOpen={ this.state.isOpen } onChange={ (isOpen) => this.updateMenu(isOpen) }>
          <Header toggle = { this.toggle.bind(this) } />
          <ListHotelsComponent navigation = { this.props.navigation } />
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  }
});
