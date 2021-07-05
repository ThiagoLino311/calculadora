import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default props => {
    const estilosBotoes=[styles.botao]
    if(props.duplo){
        estilosBotoes.push(styles.botaoDuplo)
    }
    if(props.igual){
        estilosBotoes.push(styles.botaoIgual)
    }
    if(props.operacao){
        estilosBotoes.push(styles.botaoOperacao)
    }
    if(props.C){
        estilosBotoes.push(styles.botaoC)
    }
    if(props.backSpace){
        estilosBotoes.push(styles.botaoBackspace)
    }

    return (

        <TouchableHighlight
            onPress={props.onClick}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    );
};