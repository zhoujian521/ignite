import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';

import utils from 'ethers-utils';

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

    componentDidMount () {
    // if redux persist is not active fire startup action
        if (!ReduxPersist.active) {
            this.props.startup();
        }
        this._testRegexp();
        this._testUtils();

    }

    render () {
        return (
            <View style={styles.applicationView}>
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
