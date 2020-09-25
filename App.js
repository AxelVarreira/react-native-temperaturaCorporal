import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {button, Imagebackground, TextInput ,StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0,
      mensagem: '--'
    };
    this.conversaoVerificacao = this.conversaoVerificacao.bind(this);
  }

  conversaoVerificacao(){
    let state = this.state;
    //(36 °C × 9/5) + 32 = 96,8 °F
    let converFahren = (state.celsius*9/5) + 32;
    state.fahrenheit = converFahren;
    if(state.celsius<36){
      state.mensagem = 'Hipotermico';
    }else if(state.celsius>36){
      state.mensagem = 'Febril';
    }else{
      state.mensagem = 'Tá tranquilo, tá favoravel!';
    }
    this.setState(state);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Digite aqui sua temperatura em Cº</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={celsius => this.setState({celsius})}
          value={this.state.celsius}
          placeholder='Exemplo: 36'
          keyboardType={'numeric'}
        />
        <Button 
          onPress={this.conversaoVerificacao}
          title="Verificar"
          color="#841584"
          accessibilityLabel="Aperta para converter e verificar temperatura"
        />
        <Text style={styles.text}>
          Sua temperatura em fahrenheit: {this.state.fahrenheit}
        </Text>
        <Text>
          você está: {this.state.mensagem}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1EF'
  },
  text: {
    margin: 10,
  }
});