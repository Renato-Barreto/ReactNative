import { View, Text, StyleSheet } from 'react-native';

export default function App(){

  return( 
    <View style={css.caixa}>
      <Text style={css.titulo}>Meu App Mobile</Text>
      <Text style={css.titulo}>(virus.com.senai.apk)</Text>
    </View>
  );

};

const css = StyleSheet.create({

  caixa:{
    flex:1,
    backgroundColor:'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo:{
    fontSize: 35,
    color: 'white',
  }

})