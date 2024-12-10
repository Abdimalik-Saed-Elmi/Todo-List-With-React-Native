import { Image, StyleSheet,  View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Realcard() {
  return (
    <View >
         <Text style={styles.Textstyle}>Flat-List</Text>
         <View style={styles.Parent}>
         <Image
    source={{
        uri: 'https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }}
    style={styles.ImageIcon}
    />
        <View style={styles.card}>
            <Text style={styles.item1}>
               Iphone16
            </Text>
            <Text style={styles.item2}>
                Mogadishu-Somalia
            </Text>
            <Text style={styles.item3}>
            An iPhone16 is a smartphone developed by Apple that combines 
            a computer, camera, music player, and phone into one device.
            </Text>
            <TouchableOpacity style={styles.Touchable}>
            <Text style={styles.item4}>
                Join us
            </Text>
            </TouchableOpacity>
           
        </View>
         </View>

    </View>
  )
}

const styles = StyleSheet.create({
    Parent:{
            backgroundColor: '#53E0BC',
            marginTop: 10,
            height: 400,
            margin:5,
            borderRadius: 8
    },
    Textstyle:{
        fontSize: 24,
        fontWeight: 'bold',
        margin:8
    },
ImageIcon:{
    height: 180,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
},

card:{
    gap:8,
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
item1:{
    fontSize: 19,
    fontWeight: 'bold'

},
item2:{
    fontWeight: '500'
},
item3:{
    marginVertical:15,
    fontWeight: '210'

},
item4:{
    fontSize: 20,
    color: 'white'
},
Touchable:{
    width: '100%',
    alignItems:'center',
    paddingHorizontal: 20,
    backgroundColor: '#AE1438',
    marginBottom: -6,
    paddingVertical: 10,
    borderRadius: 10
}
})