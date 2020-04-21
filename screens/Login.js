import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import barrels from '../images/barrels.jpg';

export default class Login extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <ImageBackground source={barrels} style={styles.image}>
                    <Text style={styles.title}>KENTUCKY{'\n'}HUG</Text>
                    <Text style={styles.loginText}>USERNAME</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.loginText}>PASSWORD</Text>
                    <TextInput style={styles.input}></TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>SIGN IN</Text>
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
        marginBottom: '35%',
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
        marginTop: '5%'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Chalkduster',
        fontWeight: 'bold',
        marginTop: '6%'
    },
    loginText: {
        fontSize: 20,
        marginBottom: '5%',
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
        fontSize: 20,
        marginBottom: '5%',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Chalkduster',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    }
});