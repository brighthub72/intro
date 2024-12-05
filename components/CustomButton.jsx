import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress, backgroundColor,textColor, borderWidth, borderColor}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, {backgroundColor:backgroundColor || 'transparent', borderWidth:borderWidth || 0, borderColor:borderColor || 'transparent'}]} onPress={onPress}>
         <Text style={[styles.textStyle, {color: textColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        width:312,
        paddingVertical: 14,
        borderRadius: 16,
        marginTop: 10,
    },
    textStyle:{
        fontSize: 17,
        fontWeight: 'condensedBold',
        textAlign: 'center'
    }
})