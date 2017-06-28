/*
 * @Author: 余洪江 
 * @Date: 2017-06-28 15:39:32 
 * @Last Modified by: 余洪江
 * @Last Modified time: 2017-06-28 18:47:37
 */

import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import {
    NativeModules,
    NativeAppEventEmitter
} from 'react-native'

import SetCell from './SetCell';

class SetInfo extends React.Component{

    _pushDestiNation(){
        console.log("这些信息"+NativeModules.PushNative.openVC("啥"));
        // push.openVC("");
        console.log('浮夸')
    }

    render(){

        return<View style={{backgroundColor:'orange', flex:1}}>

                <SetCell></SetCell>
            
        </View>
    }
}

export default SetInfo
