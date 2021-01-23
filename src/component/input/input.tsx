import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text } from 'react-native';
 import styles from './inputstyle';

interface inputprops{
  label: string,
  value : any,
  onChangeText : any ,
  secured?:boolean
}

class FloatingLabelInput extends Component<inputprops> {
  constructor (props:inputprops){
    super(props)
  }
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: true });

  render() {
    return (
      <View style={{ paddingTop: 18 }}>
        <Text style={{ position: 'absolute',
      left: 20,
      top: ! this.state.isFocused ? 30 : 0,
      fontSize: !this.state.isFocused ? 17 : 16,
      color: !this.state.isFocused ? '#aaa' : '#00004d',
      fontFamily:'OpenSans-Regular'
      }}>
          {this.props.label}
        </Text>
        <TextInput
         
          style={styles.viewStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChangeText = {this.props.onChangeText}
          value = {this.props.value}
          secureTextEntry={this.props.secured}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default FloatingLabelInput;


