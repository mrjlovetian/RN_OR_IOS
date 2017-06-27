/*
 * @Author: 余洪江 
 * @Date: 2017-06-27 16:32:36 
 * @Last Modified by: 余洪江
 * @Last Modified time: 2017-06-27 18:21:34
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
}from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component
{
    static navigationOptions = {
        title: '我是导航栏',
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Text style={{backgroundColor:'white'}}>看我跳转界面</Text>
                <ScrollView>
                    <TouchableHighlight onPress={()=>navigate('Chat', {username: 'MRJ'})} >

                        <Text style={{backgroundColor:'white'}}>Button</Text>
                        </TouchableHighlight>
                </ScrollView>
            </View>
        )
    }
}

class ChatScreen extends React.Component
{
    static navigationOptions = {
        title: '来啊，造作啊',
    };

    render(){
        return (
            <View>
                <Text>聊天加界面</Text>
                <Text>{this.props.navigation.state.params.username}</Text>
            </View>
        )
    }
}

const RN_OR_IOS = StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatScreen},
});

AppRegistry.registerComponent('RN_OR_IOS', ()=>RN_OR_IOS);