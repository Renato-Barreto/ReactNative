// Aqui começa os imports
import {View, Text, StyleSheet} from 'react-native';
import Component from './componenente';

// Aqui começa o app
export default function App(){

  // Aqui começa o body
  return( 
    <View style={styles.central}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <Component/>
    </View>
  );

};

// Aqui começa o styles
const styles = StyleSheet.create({

  central:{
    flex:1,
    backgroundColor:'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo:{
    fontSize: 35,
    color: 'white',
  }

})