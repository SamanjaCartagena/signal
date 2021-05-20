import React,{useState} from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input} from 'react-native-elements';

const RegisterScreen = ({navigation}) => {
    const [name,setName] = useState("");
    const [email,setEmail]=useState("");
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>

            <Text h3 style={{marginBottom:50}}>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
             <Input 
             placeholder="Full Name"
             autofocus type='text'
             value={name}
             onChangeText={(text)=> setName(text)}
             />
             <Input 
             placeholder="Email"
             type='email'
             value={email}
             onChangeText={(email)=> setEmail(email)}
             />
             <Input 
             placeholder="Full Name"
             autofocus type='text'
             value={name}
             onChangeText={(text)=> setName(text)}
             />
             <Input 
             placeholder="Full Name"
             autofocus type='text'
             value={name}
             onChangeText={(text)=> setName(text)}
             />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{},
})
