import React, { Component } from "react";
import {Text, View} from "react-native";


export default class MeteorScreen extends Component{
    render(){
        return(
            <View 
            style = {{
                justifyContent:"center",
                alignItems:"center",
                flex:1
            }}>

                <Text>Meteor Screen</Text>
                
            </View>
        )
            
        
    }
}