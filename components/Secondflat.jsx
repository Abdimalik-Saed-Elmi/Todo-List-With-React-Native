import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Secondflat() {
  return (
    <View style={styles.Header}>
    <Text style={styles.Textstyle}>Flat-List</Text>
    <ScrollView horizontal={true}>
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
    </ScrollView>
   
  
  </View>
  )
}

const styles = StyleSheet.create({
    Header:{
        marginTop: 20,
        paddingHorizontal: 8,
        flex:1
    },
    Textstyle:{
        fontSize: 24,
        fontWeight: 'bold'

    },
    mainSection:{
        flexDirection: 'row',
        gap:16,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 8,
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
    backgroundColor: 'blue',
},
Section2:{
     backgroundColor: 'skyblue'
},
Section3:{
     backgroundColor: 'yellow'
},
})