import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View style={styles.Header}>
      <Text style={styles.Textstyle}>Flatcard</Text>
      <View style={styles.mainSection}>
      <View style={[styles.Section, styles.Section1]}>
             <Text>Live</Text>
      </View>
      <View style={[styles.Section, styles.Section2]}>
             <Text>Live</Text>
      </View>
      <View style={[styles.Section, styles.Section3]}>
             <Text>Live</Text>
      </View>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    Header:{
        paddingHorizontal: 8,
    },
    Textstyle:{
        fontSize: 24,
        fontWeight: 'bold',
        margin:8
    },
    mainSection:{
        flexDirection: 'row',
        gap:16,
        alignItems:'center',
        justifyContent: 'center',
    },
    Section:{
        width:100,
        height:100,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
Section1:{
    backgroundColor: 'red',
},
Section2:{
     backgroundColor: 'brown'
},
Section3:{
     backgroundColor: 'yellow'
},
})