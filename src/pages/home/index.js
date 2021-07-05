import React, { useState } from 'react';
import { SafeAreaView, View} from 'react-native';
import Display from '../../components/display';
import styles from './styles';
import Button from '../../components/buttons';

let estados = {
    tela: '',
    resultado: 0,
    calculado: false,
    ponto: false,
};

export default function Calc() {


    const [vDisplay, setVdisplay] = useState(estados.tela)
    const [vResultado, setVresultado] = useState(estados.resultado)

    const addDigito = (d) => {

        if(d=='+' || d=='-' || d=='/' || d=='*'){
            estados.ponto=false
        }

        if(d=='.' && !estados.ponto){
            estados.ponto=true
            estados.calculado=false
        }else if(d=='.' && estados.ponto){
            return
        }

        if((d=='+' || d=='-' || d=='/' || d=='*') && estados.calculado){
            estados.tela = estados.resultado
            estados.resultado=0
        }
        estados.tela = estados.tela + d
        setVdisplay(estados.tela)
        setVresultado(estados.resultado)
        estados.calculado = false
    };

    const limparTela = () => {
        estados = {
            tela: '',
            resultado: 0,
            calculado: false,
            ponto: false,
        };
        setVdisplay(estados.tela)
        setVresultado(estados.resultado)
    }

    const operar =(d) => {
        if(d=='C'){
            limparTela()
            return
        }
        if(d=='BS'){
            estados.tela = vDisplay.substring(0,(vDisplay.length-1))
            setVdisplay(estados.tela)
            return
        }
        try{
            estados.resultado=eval(estados.tela)
            estados.calculado=true
            setVresultado(estados.resultado)
        }catch{
            estados.resultado='Error'
            estados.calculado=true
            setVresultado(estados.resultado)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Display
                operacao={vDisplay}
                resultado={vResultado}
            />
            <View style={styles.botoes}>
                <Button label='C' C onClick={() => { operar('C') }}></Button>
                <Button label='(' C onClick={() => { addDigito('(') }}></Button>
                <Button label=')' C onClick={() => { addDigito(')') }}></Button>
                <Button label='÷' operacao onClick={() => { addDigito('/') }}></Button>
                <Button label='7' onClick={() => { addDigito('7') }}></Button>
                <Button label='8' onClick={() => { addDigito('8') }}></Button>
                <Button label='9' onClick={() => { addDigito('9') }}></Button>
                <Button label='x' operacao onClick={() => { addDigito('*') }}></Button>
                <Button label='4' onClick={() => { addDigito('4') }}></Button>
                <Button label='5' onClick={() => { addDigito('5') }}></Button>
                <Button label='6' onClick={() => { addDigito('6') }}></Button>
                <Button label='-' operacao onClick={() => { addDigito('-') }}></Button>
                <Button label='1' onClick={() => { addDigito('1') }}></Button>
                <Button label='2' onClick={() => { addDigito('2') }}></Button>
                <Button label='3' onClick={() => { addDigito('3') }}></Button>
                <Button label='+' operacao onClick={() => { addDigito('+') }}></Button>
                <Button label='◄' backSpace onClick={() => { operar('BS') }}></Button>
                <Button label='0' onClick={() => { addDigito('0') }}></Button>
                <Button label='.' onClick={() => { addDigito('.') }}></Button>
                <Button label='=' igual onClick={() => { operar('=') }}></Button>

            </View>
        </SafeAreaView>
    );
};