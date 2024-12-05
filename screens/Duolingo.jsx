import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const Duolingo = () => {
  return (
    <View style = {styles.container}>
        <Image source={require('./../assets/dualingo.png')} style={styles.image}/>
        <Text style={styles.duolingoText}>duolingo</Text>
        <Text style={styles.description}>The free, fun, and effective way to learn a language!</Text>
        <View style = {styles.buttonContainer}>
        <CustomButton title={'GET STARTED'} textColor={'black'} backgroundColor={'#2BD800'}/>
        <CustomButton title={'I ALREADY HAVE AN ACCOUNT'} textColor={'green'} borderColor={'#525D70'} borderWidth={2}/>
        </View>

    </View>
  )
}

export default Duolingo

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'black'
    },
    Text:{
        color: 'white',
        
        
    },

    image:{
        width: 163,
        height: 153
    },

    description:{
        fontSize: 18,
        color: 'white',
        fontweight: 'regular',
        textAlign: 'center',
        marginTop: 20,
        width: 255
    },

    duolingoText: {
        fontSize: 40,
        color: '#2BD800',
        fontWeight:  'bold',
        textAlign: 'center',
        marginTop: 20
    },

    buttonContainer: {
        marginTop: 100
    }

    
})