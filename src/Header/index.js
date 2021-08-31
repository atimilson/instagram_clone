import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Headers(){
    return(
        <View style={styles.header}> 
          <TouchableOpacity>
              <Image
                source={require('../img/logo.png')}
                style={styles.logo}
               />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image
                source={require('../img/send.png')}
                style={styles.send}
               />
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      height: 60,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems : 'center',
      justifyContent: 'space-between',
      paddingRight:  15,
      paddingLeft: 15,
      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation : 5,
      marginTop : 25,
    },
    logo:{

    },
    send:{
     width    : 23 ,
     height : 23,
    }
})