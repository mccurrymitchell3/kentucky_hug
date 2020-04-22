import React, { Component, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Profile extends Component {

    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    onPictureSaved = photo => {
        Alert.alert(photo.uri);
    }

    takePicture = async () => {
        if (this.camera) {
            this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
        }
    };

    render() {
        
        const { hasPermission } = this.state

        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={styles.screen}>
                    <Header />
                    <Camera
                        style={{ flex: 1, width: '100%' }}
                        type={this.state.type}
                        ref={ref => {
                            this.camera = ref;
                        }}>
                        <TouchableOpacity
                            style={{alignItems: 'center'}}
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back ?                                        
                                                          Camera.Constants.Type.front :
                                                          Camera.Constants.Type.back
                                  })
                            }}>
                            <Ionicons name="ios-reverse-camera" size={55} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{alignSelf: 'center', position: 'absolute', bottom: 0}}
                            onPress={() => {
                                this.takePicture()
                            }}>
                            <Ionicons name="md-camera" size={50} color="white" />
                        </TouchableOpacity>
                    </Camera>
                    <Footer navigation={this.props.navigation} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
});