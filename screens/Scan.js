import React, { Component, useState, useEffect } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Profile extends Component {

    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
        scanned: false
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

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({scanned: true});
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        // Call barcodelookup with data
        fetch('https://api.barcodelookup.com/v2/products?barcode=' + data + '&formatted=y&key=u66tb93lgmv41lec7g19t23y3wteah', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                name: responseJson['products'][0]['product_name'],
                image: responseJson['products'][0]['images'][0]
            })
        })
        .catch((error) => {
            console.error(error);
        });
    };

    render() {
        
        const { hasPermission } = this.state

        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            if (this.state.scanned) {
                return (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray'}}>
                        <Header />
                        <Image source={{uri: this.state.image}} style={{height: 300, width: 300, marginBottom: '5%'}} />
                        <Text style={{fontSize: 18, color: 'black'}}>{this.state.name}</Text>
                        <Footer navigation={this.props.navigation} />
                    </View>
                )
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
                            <BarCodeScanner
                                onBarCodeScanned={this.scanned ? undefined : this.handleBarCodeScanned}
                                style={StyleSheet.absoluteFillObject}
                            />
                            {this.scanned && <Button title={'Tap to Scan Again'} style={{height: 50, width: 100}} onPress={() => this.setState({scanned: false})} />}
                            <TouchableOpacity
                                style={{alignSelf: 'center', position: 'absolute', bottom: 60}}
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
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
});