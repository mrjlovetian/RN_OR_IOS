import React,
{
    Component
}from 'react';

import {
    AppRegistry,
    Text,
    View
}from 'react-native';

class RN_OR_IOS extends Component{
        render (){
        return (
            <View style={{flex:1}}>
                <Text >myapp</Text>
                </View>
        )
    }
}
AppRegistry.registerComponent('RN_OR_IOS', ()=>RN_OR_IOS);
