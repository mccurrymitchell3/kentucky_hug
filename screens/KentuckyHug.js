import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import barrels from '../images/barrels.jpg';

export default class KentuckyHug extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <ImageBackground source={barrels} style={styles.image}>
                    <Text style={styles.title}>KENTUCKY{'\n'}HUG</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.buttonText}>REGISTER</Text>
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
        marginBottom: '85%',
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
        margin: '2%'
    },
    buttonText: {
        fontSize: 20,
        marginTop: '6%',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Chalkduster',
        fontWeight: 'bold'
    }
});