import React, { Component } from 'react';
import {

    Button, StyleSheet, View
} from 'react-native';

export default class Logout extends Component {

    logout= () =>{
        console.log("logout")
        console.log(this.props.navigation.navigate)
        this.props.navigation.navigate("Login")
    }
    render() {
        return(
        <View style={styles.container}>
            <Button
                style={styles.input}
                title={'Lougout'}
                onPress={this.logout.bind(this)}
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