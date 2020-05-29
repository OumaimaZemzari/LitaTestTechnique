import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username   : '',
            password: '',
        }
    }

    Login = () => {
        if((!(this.state.password) || this.state.password.length <= 0)||(!(this.state.username) || this.state.username.length <= 0)
         ||(this.state.username!=='Admin'||this.state.password!=='0000'))
        {
            Alert.alert("Alert", "email ou mot de passe vide ");}
        else
        {this.props.navigation.navigate("ListProjects",{ Email: this.state.email })}
    }
    _searchTextInputChanged(text) {
        this.setState({
            email:text

        }) ; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>LITA.CO</Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Nom d'utilisateur "
                               underlineColorAndroid='transparent'
                               onChangeText={(username) => this.setState({username})}/>




                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Mot de passe"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Login()}>
                    <Text style={styles.loginText}>connexion</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() =>Alert.alert("Alert", "restore_password ")}>
                    <Text>tu as oublié ton mot de passe ?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => Alert.alert("Alert", "créer compte ")}>
                    <Text>Créer Compte</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
       ImageContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    logoText : {
        fontSize : 40 ,
        fontWeight : "800" ,
        marginTop : 150 ,
        marginBottom : 30 ,
        textAlign : 'center' ,
    } ,
    loginText: {
        color: 'white',
    }
});
