import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

/*function display(props){

}*/
export default props => {

    return (
        <View style={styles.display}>
            <Text
                style={styles.textoDisplayOperacao}
                numberOfLines={1}
            >{props.operacao}
            </Text>
            <Text
                style={styles.textoDisplayResultado}
                numberOfLines={1}
            >{props.resultado}
            </Text>
        </View>
    );
};