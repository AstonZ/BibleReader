import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import ScreedWidth from '../utils/CommUtil'

export default class AllCellTestPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [
                {
                    'name': 'AK1',
                    'skill': 'rn'
                },
                {
                    'name': 'AB2',
                    'skill': 'python'
                },
                {
                    'name': 'M47',
                    'skill': 'rn'
                }  
            ],
            ds: new ListView.DataSource(
               {
                   rowHasChanged: (r1, r2) => r1 !== r2
               }
            )
        }
    }

    _onTextPress = txt => {
        console.log('User clicked txt : ' + txt)
    }
    _onLongPressCell = (index, txt) => {
        console.log('Long Press cell at index ' + index + " " + txt)
    }
    _renderRow = (rowData, rowId, sectionId) => {
        // return (
        //     <View style={flex:1}>
        //         <Text>{rowId + rowData.name + rowData.skill + sectionId }</Text>
        //     </View>
        // )        
        return (
            <View style={{flex:1}}>
                <Text  onLongPress={this._onLongPressCell.bind(1, 'whole chapter')}
                    style={{
                        textDecorationLine: 'underline', 
                        textDecorationStyle: 'dotted', 
                        textDecorationColor:'black'}} >
                    <View style={{backgroundColor: 'white', width: 40, height: 40}}>
                        <Text style={{fontSize: 36}}>12</Text>
                    </View>
                    <Text>正常文本</Text>
                    <Text style={{textDecorationLine: 'underline', textDecorationColor:'red'}}>下划线</Text>
                    <Text style={{color: 'red'}}>红色</Text>
                    <Text>正常文本</Text>
                    <Text style={{backgroundColor: 'yellow'}}>背景高亮</Text>
                    <Text>正常文本</Text>
                    <Text>选中文本</Text>
                    <Text onPress={() => this._onTextPress("可以点击事件")}>可以点击事件</Text>
                </Text>
            </View>
        )
    }

    

    render(){
        return (
            <View style={styles.container}>
                <ListView style={styles.listStyle}
                    dataSource={this.state.ds.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, rowId, sectionId)}
                    showsVerticalScrollIndicator={false}
                />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    
    listStyle: {
        marginTop: 20
    }
})