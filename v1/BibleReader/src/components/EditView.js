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

export default class EditView extends Component {

    static propTypes = {
        name: PropTypes.string,
        onChangeText: PropTypes.func
    }

    constructor(props){
        super(props)
        this.state = { text: ''}
    }

    render (){
        return (
            <View style={styles.bgViewStyle}>
                <TextInput style={styles.inputStyle}
                placeholder={this.props.name}
                onChangeText = { text => {
                        this.setState({text})
                        this.props.onChangeText(text)
                    }
                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgViewStyle: {
        marginTop: 10,
        height: 44,
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    inputStyle: {
        backgroundColor: '#ffffff',
        height: 38,
        margin: 10
    }
})