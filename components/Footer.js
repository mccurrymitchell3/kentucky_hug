import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import profile_icon from '../images/profile_icon.png';

export default class Footer extends Component {
    
    state = {
        username: this.props.navigation.state.params.username,
        header: this.props.header || false
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                height: this.state.header ? '9%' : '8%',
                width: '100%',
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 0
            }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Home', {
                            username: this.state.username
                        })
                    }}
                    style={styles.item}>
                        <Ionicons name="ios-home" style={{ fontSize: 35, marginTop: 20 }} />
                        <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Search', {
                            username: this.state.username
                        })
                    }}
                    style={styles.item}>
                        <Ionicons name="md-search" style={{ fontSize: 35, marginTop: 20 }} />
                        <Text style={styles.text}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Scan', {
                            username: this.state.username
                        })
                    }}
                    style={styles.item}>
                        <Ionicons name="ios-camera" style={{ fontSize: 45, marginTop: -5, marginBottom: -10 }} />
                        <Text style={styles.text}>Scan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Feed', {
                            username: this.state.username
                        })
                    }}
                    style={styles.item}>
                        <FontAwesome
                            name="newspaper-o"
                            style={{ fontSize: 30}}
                        />
                        <Text style={styles.text}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Profile')}}
                    style={styles.item}>
                        <Ionicons name="md-person" style={{ fontSize: 35, marginTop: 20 }} />
                        <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: '100%',
        width: '20%',
        // backgroundColor: state.selected == 'Group' ? '#3A9C1C' : '#54B948'
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        height: '60%',
        width: '40%',
        borderRadius: 30
    },
    text: {
        fontSize: 12
    }
});