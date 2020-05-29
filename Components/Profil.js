import React, { Component } from "react";


import {
    Keyboard,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Alert,
    KeyboardAvoidingView,
    StyleSheet,
    Image
} from 'react-native';
import { Button } from 'react-native-elements';
class Profil extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }



    render() {
        console.log(this.props)
        return (


                    <View style={styles.container}>


                            <Image style={styles.avatar} source={require('../Images/user.png')}  />
                            <Text style={styles.TextStyle}> Nom  :  zemzari</Text>
                        <Text style={styles.TextStyle}> Prenom  : oumaima </Text>
                        <Text style={styles.TextStyle}>email : aaaaa@gmail.com </Text>
                            <Text></Text>




                    </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    ScreenContainer: {
        flex: 1,
    },
    avatar: {
        marginLeft: 120,
        marginRight: 15,
        marginTop: 150,
        marginBottom: 30,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2

    },

    TextStyle: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,

    },


});


export default (Profil);
