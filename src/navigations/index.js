import React, { useEffect } from "react";
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import { useSelector, useDispatch } from 'react-redux';
import AuthStackNavigator from "./stack/AuthStack";
import DashStackNavigator from "./stack/DashStack";
import { onNetworkConnectionChange } from '../store/device/device.actions';

const MainStackNavigator = () => {

    //Store function
    let { auth } = useSelector((state) => state );
    let dispatch = useDispatch();
    
    //update the netInfo
    useEffect(() => {
        NetInfo.addEventListener((state) => {
            dispatch(onNetworkConnectionChange(state.isConnected, state.isInternetReachable))
            if (state.isConnected === true && state.isInternetReachable === false) {
                showMessage({ message: 'Network not reachable.', type: 'warning'});
            } else if(state.isConnected === false && state.isInternetReachable === false) {
                showMessage({ message: 'You are offline.', type: 'danger' });
            }
        });
    }, []);

    return (
        <NavigationContainer>
            { auth.loginStatus ? 
                null
                // <DashStackNavigator />
            :
                <AuthStackNavigator />
            }
        </NavigationContainer>
    );
}

export default MainStackNavigator;