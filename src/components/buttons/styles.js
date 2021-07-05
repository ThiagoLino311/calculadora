import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    botao: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 30,
        backgroundColor: '#00003F',
        color: '#fff',
        textAlign: 'center',        
    },
    botaoOperacao: {
        color: '#FD7A22'
    },
    botaoIgual: {
        backgroundColor:'#FD7A22',
        borderRadius:20,
    },
    botaoC: {
        color: '#FD7A22'
    },
    botaoBackspace: {
        color: '#FD7A22'
    },
    botaoDuplo:{
        width: Dimensions.get('window').width / 2,
    }
});

export default styles;