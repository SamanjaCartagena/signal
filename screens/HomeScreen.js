import { getStateFromPath } from '@react-navigation/core';
import React,{useLayoutEffect} from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native'
import {Button, Avatar} from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import {auth,db} from "../firebase";
const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
       navigation.setOptions({
         title:"Husers",
         headerStyle:{backgroundColor:'#fff'},
         headerTitleStyle:{color:'black'},
         headerTintColor:'black',
         headerLeft: () => (
             <View style={{marginLeft:20}}>
                 <TouchableOpacity >
              <Avatar  rounded source={{uri:auth?.currentUser?.photoURL}}/>
              </TouchableOpacity>
             </View>
         ),
       });
    }, []);

    return (
        <SafeAreaView>
          <ScrollView>
           <CustomListItem />
          </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
