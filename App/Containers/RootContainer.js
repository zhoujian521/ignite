import React, { Component } from 'react';
import { View, StatusBar, Alert, Text } from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';

import utils from 'ethers-utils';
import  Identicon from 'identicon.js';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Spinner from 'react-native-loading-spinner-overlay';
import Overlay from 'react-native-modal-overlay';
import Toast from 'react-native-root-toast';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
    _testRegexp=()=>{
        const escapeStringRegexp = require('escape-string-regexp');
        console.log('=======01====escapeStringRegexp=========================');
        console.log(escapeStringRegexp);
        console.log('=======01====escapeStringRegexp=========================');
    }
    _testUtils=()=>{
        console.log('=======02====ethers-utils=========================');
        console.log(utils);
        console.log('=======02====ethers-utils=========================');
    }
    _testEtherscan=()=>{
        console.log('=======03====etherscan-api=========================');
        const api = require('etherscan-api').init('YourApiKey');
        const balance = api.account.balance('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
        balance.then((balanceData) => {
            console.log(balanceData);
        });
        console.log('=======03====etherscan-api=========================');
    }
    _testIdenticon=()=>{
        console.log('=======04====Identicon=========================');
        // const data = new Identicon('d3b07384d113edec49eaa6238ad5ff00', 420).toString();
        // console.log(data.toString());
        console.log('=======04====Identicon=========================');
    }
    _testMoment=()=>{
        console.log('=======05====moment=========================');
        const moment = require('moment');
        console.log(moment().format());
        console.log('=======05====moment=========================');
    }
    _testHapticFeedback=()=>{
        console.log('=======06====HapticFeedback=========================');
        console.log(ReactNativeHapticFeedback);
        console.log('=======06====HapticFeedback=========================');
    }
    _testToast=()=>{
        Toast.show('111111111111111111111111', {
            shadow:true,
            position: Toast.positions.CENTER,
        });
    }

    componentDidMount () {

        // if redux persist is not active fire startup action
        if (!ReduxPersist.active) {
            this.props.startup();
        }
        this._testRegexp();
        this._testUtils();
        this._testEtherscan();
        this._testIdenticon();
        this._testMoment();
        this._testHapticFeedback();
        this._testToast();
    }

    render () {

        return (
            <View style={styles.applicationView}>
                {/* <Spinner visible cancelable
                    textContent={'Loading...'}/> */}
                {/* <Overlay visible closeOnTouchOutside>
                    <Text>Some Modal Content</Text>
                </Overlay> */}
                {/* <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar/>}>
                    <View></View>
                    <View></View>
                </ScrollableTabView> */}
                {/* <Swiper showsButtons>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper> */}
                <StatusBar barStyle='light-content' />
                <ReduxNavigation />
            </View>
        );
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    startup: () => dispatch(StartupActions.startup())
});

export default connect(null, mapDispatchToProps)(RootContainer);
