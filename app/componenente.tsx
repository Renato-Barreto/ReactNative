import {View, Text, Button, TextInput,StyleSheet} from 'react-native';
import React from 'react';


export default function Component(){

    return(
        <View style={styles.caixa}>
            <Text style={styles.ctitle}>Valor:</Text>
            <TextInput style={styles.cinput}
            keyboardType='numeric'
            />
            <Button
            title='Converter'
            />
        </View>
    );
}

const styles = StyleSheet.create({

    caixa:{
        backgroundColor:'white',
        width: '55%',
        padding: 20,
        borderRadius: 15,
        marginTop: 20,
      },
    
      ctitle:{
        fontSize: 20,
        color: '#2196f3',
        fontWeight: 'bold',
      },

      cinput:{
        width: '100%',
        borderWidth: 1,
        borderColor: '#2196f3',
        marginBottom: 15,
        marginTop: 5,
      }

})