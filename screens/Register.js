import React, { Component } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import barrels from '../images/barrels.jpg';

const credentials = require('../credentials');

export default class Register extends Component {

    state = {
        enteredFirstName: '',
        enteredLastName: '',
        enteredEmail: '',
        enteredUsername: '',
        enteredPassword: ''
    }

    registerUser = () => {
        fetch('http://' + credentials.ipAddr + ':3000/register_user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.enteredFirstName,
                lastName: this.state.enteredLastName,
                email: this.state.enteredEmail,
                username: this.state.enteredUsername,
                password: this.state.enteredPassword
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.accountExists) {
                Alert.alert('Error', 'This username is already taken');
            } else {
                Alert.alert('Success', 'Your account was successfully registered');

                this.props.navigation.navigate('Profile', {
                    firstName: this.state.enteredFirstName,
                    lastName: this.state.enteredLastName,
                    email: this.state.enteredEmail,
                    username: this.state.enteredUsername
                });
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.screen}>
                <ImageBackground source={barrels} style={styles.image}>
                    <Text style={styles.title}>KENTUCKY{'\n'}HUG</Text>
                    <Text style={styles.RegisterText}>FIRST NAME</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ enteredFirstName: text })}
                        value={this.state.enteredFirstName}>
                    </TextInput>
                    <Text style={styles.RegisterText}>LAST NAME</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ enteredLastName: text })}
                        value={this.state.enteredLastName}
                    ></TextInput>
                    <Text style={styles.RegisterText}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ enteredEmail: text })}
                        value={this.state.enteredEmail}>
                    </TextInput>
                    <Text style={styles.RegisterText}>USERNAME</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ enteredUsername: text })}
                        value={this.state.enteredUsername}>
                    </TextInput>
                    <Text style={styles.RegisterText}>PASSWORD</Text>
                    <TextInput style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ enteredPassword: text })}
                        value={this.state.enteredPassword}>
                    </TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.registerUser}>
                            <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    title: {
        marginTop: '10%',
        marginBottom: '20%',
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Chalkduster',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5
    },
    button: {
        height: '8%',
        width: '55%',
        backgroundColor: '#C9623C',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: '4%'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Chalkduster',
        fontWeight: 'bold',
        marginTop: '6%'
    },
    RegisterText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Chalkduster',
        textShadowColor: 'black',
        textShadowRadius: 5
    },
    input: {
        width: '60%',
        alignSelf: 'center',
        fontSize: 18,
        marginBottom: '5%',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Chalkduster',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    }
});