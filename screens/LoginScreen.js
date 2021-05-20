import React,{useState} from 'react'
import { StyleSheet } from 'react-native';
import { View, Text} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView} from 'react-native';
const LoginScreen = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn =() =>{

    }
    return (
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <StatusBar style="light"/>
            
            <Image 
           source={{
               uri:
               "https://static.thenounproject.com/png/53855-200.png",
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
        <Button containerStyle={styles.button} type="outline" title="Register"/>
        <View style={{height:100}}/>
        </KeyboardAvoidingView>
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
        
    }, 
    button:{

    }
    
    
});

