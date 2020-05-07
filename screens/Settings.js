import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import profile_background from '../images/profile_background.jpg';
import profile_icon from '../images/profile_icon.png';

import Footer from '../components/Footer';

export default class Settings extends Component {

    state = {
        firstName: this.props.navigation.state.params.firstName,
        lastName: this.props.navigation.state.params.lastName,
        email: this.props.navigation.state.params.email,
        username: this.props.navigation.state.params.username
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.settingsList}>
                    <TouchableOpacity
                    style={styles.list}>
                        <SimpleLineIcons
                            name="user"
                            style={styles.simpleIcon}
                        />
                        <Text style={styles.listText}>Account</Text>
                        <Ionicons
                            name="ios-arrow-forward"
                            style={styles.arrow}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.list}>
                        <SimpleLineIcons
                            name="bell"
                            style={styles.simpleIcon}
                        />
                        <Text style={styles.listText}>Notifications</Text>
                        <Ionicons
                            name="ios-arrow-forward"
                            style={styles.arrow}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.list}>
                        <SimpleLineIcons
                            name="lock"
                            style={styles.simpleIcon}
                        />
                        <Text style={styles.listText}>Privacy</Text>
                        <Ionicons
                            name="ios-arrow-forward"
                            style={styles.arrow}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.list}>
                        <SimpleLineIcons
                            name="question"
                            style={styles.simpleIcon}
                        />
                        <Text style={styles.listText}>Help</Text>
                        <Ionicons
                            name="ios-arrow-forward"
                            style={styles.arrow}
                        />
                    </TouchableOpacity>
                    <View
                    style={styles.follow}>
                        <Text style={styles.followText}>Follow Us!</Text>
                        <View style={styles.social}>
                            <TouchableOpacity>
                                <SimpleLineIcons
                                    name="social-facebook"
                                    style={styles.facebookIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <SimpleLineIcons
                                    name="social-instagram"
                                    style={styles.instagramIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <SimpleLineIcons
                                    name="social-twitter"
                                    style={styles.twitterIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <SimpleLineIcons
                                    name="social-linkedin"
                                    style={styles.linkedinIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Footer navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEE7DC'
    },
    settingsList: {
        height: '50%',
        width: '100%'
    },
    list: {
        flexDirection: 'row',
        height: '25%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#EEE7DC',
        borderWidth: 1,
        alignItems: 'center'
    },
    listText: {
        fontSize: 16,
        position: 'absolute',
        left: 85
    },
    communityIcon: {
        fontSize: 40,
        position: 'absolute',
        left: 30
    },
    simpleIcon: {
        fontSize: 30,
        position: 'absolute',
        left: 35
    },
    arrow: {
        fontSize: 30,
        marginHorizontal: '1%',
        width: '7%',
        position: 'absolute',
        right: 0
    },
    follow: {
        height: '40%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#EEE7DC',
        borderWidth: 1,
        alignItems: 'center'
    },
    followText: {
        fontSize: 20,
        marginTop: '5%'
    },
    social: {
        flexDirection: 'row',
        marginTop: '5%',
        alignItems:'center',
        marginLeft: '5%'
    },
    facebookIcon: {
        fontSize: 40,
        marginHorizontal: '5%',
        color: '#3b5998'
    },
    instagramIcon: {
        fontSize: 40,
        marginHorizontal: '5%',
        color: '#e1306c'
    },
    twitterIcon: {
        fontSize: 40,
        marginHorizontal: '5%',
        color: '#00acee'
    },
    linkedinIcon: {
        fontSize: 40,
        marginHorizontal: '5%',
        color: '#0e76a8'
    }
});