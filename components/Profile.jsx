import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {

        const ArrayCard = [
            
              {
              
                name: 'Salman Yonis Yusuf',
                statuss: 'He is a full stack developer',
                UriImage: 'https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                id: 6898,
                name: 'Mohamed Yonis Yusuf',
                statuss: 'He is a full stack developer',
                UriImage: 'https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                id: 8275,
                name: 'Abdimalik Said Elmi',
                statuss: 'He is a Mobile app developer',
                UriImage: 'https://images.pexels.com/photos/29410748/pexels-photo-29410748/free-photo-of-vintage-car-cruising-by-the-seaside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }

        ]
  return (
    <View>
         <Text style={styles.header}>Profiles</Text>
     {
        ArrayCard.map(({id, name, statuss, UriImage})=>(
            <View key={id}>
             
              <View style={styles.Parent}>
                <Image 
                source={{uri:UriImage}}
                style={styles.Imagecard}
                />
                <View>
                    <Text style={styles.InnerText}>{name}</Text>
                    <Text style={styles.InnerText1}>{statuss}</Text>
                </View>
              </View>
            </View>
        ))
     }
    </View>
  )
}

const styles = StyleSheet.create({

header:{
    fontSize: 24,
    fontWeight: 'bold',
    margin:8
},
Parent:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:10,
    gap: 8
},
Imagecard:{
    width: 60,
    height:60,
    borderRadius: 60/2,
    marginRight: 10,
    marginVertical: 10
},

InnerText:{
 color: '#2C3335',
 fontSize: 15,
 fontWeight: '700'
},
InnerText1:{
    color: '#2C3335',
    fontSize: 15,
}
})