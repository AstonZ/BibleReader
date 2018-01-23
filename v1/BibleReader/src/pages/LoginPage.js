import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import { Button } from 'react-native-elements';


import ScreedWidth from '../utils/CommUtil'
import EditView from '../components/EditView'

export default class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            mobile:'', 
            pwd:'',
            isInputValid: false,
            isLoading: false,
            isLoginDisabled:true
        }
    }

    render () {

        return (
            <View style={LoginStyles.container}>
                <EditView style={LoginStyles.mobileInputStyle}
                    name='Input Your Mobile Number'
                    onChangeText = { text=>{
                        this.setState({
                            mobile: text
                        })
                        if(text.length>2){
                            this.setState({
                                isLoginDisabled: false
                            })
                        }else{
                            this.setState({
                                isLoginDisabled: true
                            })
                        }
                    }}/>
                <EditView style={LoginStyles.passwordInputStyle}
                    name='Input Your Password'
                    onChangeText = { text => {
                        this.setState({
                            pwd: text
                        })
                    }}
                    />
                <Button style={LoginStyles.loginBtnStyle}
                    title='Login'
                    disabled={this.state.isLoginDisabled}
                    buttonStyle={{borderRadius: 4, backgroundColor: 'yellow'}}
                    disabledStyle = {{backgroundColor: 'gray'}}
                    onPress={()=>{
                        console.log('Action Login with mobile:' + this.state.mobile)
                    }}/>
            </View>
        )

        _onLogin = ()=> {
            console.log("Login Pressed")
        }
    }
}

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff'
    },
    
    mobileInputStyle: {

    },

    passwordInputStyle: {

    },

    loginBtnStyle: {
        marginTop: 40,
        height: 50,
        width: 200
    }
})