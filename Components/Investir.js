import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, } from 'react-native';

export default class Investir extends Component {
    constructor(props) {
        super(props);


    }

    valider() {


        Alert.alert('message', `validé`);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput

                    keyboardType={'numeric'}
                    placeholder={'montant en euro'}
                    style={styles.input}
                />
                <TextInput

                    keyboardType={'numeric'}
                    placeholder={'numero Carte Credit'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Valider'}
                    style={styles.input}
                    onPress={this.valider.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
