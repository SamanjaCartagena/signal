import { getStateFromPath } from '@react-navigation/core';
import React,{useLayoutEffect} from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native'
import {Button, Avatar} from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons";
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
                 <TouchableOpacity activeOpacity={0.5}>
              <Avatar onPress={logout}  rounded source={{uri:auth?.currentUser?.photoURL}}/>
              </TouchableOpacity>
             </View>
         ),
         headerRight:() =>(
             <View style={{
                 flexDirection:'row',
                 justifyContent:'space-between',
                 width:80,
                 marginRight:20,
             }}>
                 <TouchableOpacity activeOpacity={0.5} >
                <AntDesign name='camerao' size={24} color='black'/>
                 </TouchableOpacity>
                 <TouchableOpacity 
                 onPress={()=> navigation.naviagte("AddChat")}
                 activeOpacity={0.5} >
                 <SimpleLineIcons name="pencil" size={24} color="black"/>
                 </TouchableOpacity>
                 

             </View>

         ),
       });
    }, [navigation]);

   const logout=()=>{
        auth.signOut().then(()=>{

        }).catch((error)=>{

        });
        navigation.navigate('Login');
    }
    return (
        <SafeAreaView>
          <ScrollView>
           <CustomListItem />
          </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
