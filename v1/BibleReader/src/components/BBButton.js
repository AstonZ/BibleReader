import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';

export default class BBButton extends Component {

    static prosTypes = {
        type: PropTypes.string,
        onPress: PropTypes.func,
        title: PropTypes.string,
        buttonStyle: PropTypes.object,
        disabled: PropTypes.bool
    }

    constructor(props){
        super(props)

    }

    render(){
        let loginTypeButton = (
            <Button
            buttonStyle={[ButtonStyles.buttonSizeStyle, ButtonStyles.loginButtonStyle]}
            disabledStyle={[ButtonStyles.buttonSizeStyle, ButtonStyles.loginDisabledStyle]}
            textStyle={ButtonStyles.textStyle}
            disabledTextStyle={ButtonStyles.disabledTextStyle}
            onPress={this.props.onPress}
            />
        );
        switch (this.props.type) {
            case 'login':
                return loginTypeButton                
            default:
                return loginTypeButton
        }
    }
}

const ButtonStyles = StyleSheet.create({

    buttonSizeStyle: {
        width: 200,
        height: 40,
        borderRadius: 4,
    },
    loginButtonStyle: {
        backgroundColor: 'white'
    },

    loginDisabledTextStyle: {
        backgroundColor: 'gray'
    },

    loginTextStyle: {
        color: 'oringe'
    },

    loginDisabledStyle:{
        color: 'white'
    },


})