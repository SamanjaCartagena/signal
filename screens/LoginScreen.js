import React,{useState, useEffect} from 'react'
import { StyleSheet } from 'react-native';
import { View, Text} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView} from 'react-native';
import {auth} from "../firebase";
const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged((authUser) => {

         console.log(authUser);
          if(authUser){
              navigation.replace("Home");
          }
      });
      return unsubscribe;
    },[])
    const signIn =() =>{

    }
    return (
        <View behavior='padding' enabled style={styles.container}>
            <StatusBar style="light"/>
            
            <Image 
           source={{
               uri:
               "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
           }}
           style={{width:200, height:200}}
        />
        <View style={styles.inputContainer}>
            <Input 
            placeholder="Email" 
            autoFocus type="email"
             value={email} 
             onChange={(text)=> setEmail(text)}/>

            <Input
             placeholder="Password" 
             secureTextEntry
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}/>
           
        </View>
        <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
        <Button
         onPress={()=>navigation.navigate('Register')} 
         containerStyle={styles.button} 
         type="outline" 
         title="Register"/>
        <View style={{height:100}}/>
        </View>
    )
}

export default LoginScreen;
const styles= StyleSheet.create({

    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white'
    },
    inputContainer:{
        width:300,
    }, 
    button:{
      width:200,
      marginTop:10,
    }
    
    
});

