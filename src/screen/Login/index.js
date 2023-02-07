import React, { useState, useEffect, createRef } from "react";
import { View, Keyboard, Text, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback,  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import UpperCurveSVG from "../../assets/images/svg/upperGradientBg.svg";
import LowerCurveSVG from "../../assets/images/svg/lowerGradientBg.svg";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from "react-native-flash-message";
import { Strings, Images, Colors } from '../../common/constants';
Icon.loadFont();

//validations schema
import { validate_SignIn_Obj, requestLocationPermission } from '../../common/helper/customFun';

// import custom component
import { InputTextComponent, TextComponent } from "../../components";

// api & redux actions
import { loginSuccess } from '../../store/auth/auth.actions';

const blankForm =   {
    email:    "",
    password: "",
};

const Login = ({props}) => {
     
    //store events
    let dispatch = useDispatch();
    let { auth } = useSelector((state) => state);

    // setup the states
    const [ formValue, setFormValue ] = useState(Object.assign({}, blankForm));

    // create the ref
    const emailAddressRef     = createRef();
    const passwordRef         = createRef();

    //function for login process
    const loginProcess = async() => {
        Keyboard.dismiss();
        if(validate_SignIn_Obj(formValue)) {
            if(auth.registerUsers.some(i=>i.email===formValue.email && i.password===formValue.password)) {
                dispatch(loginSuccess());
            } else {
                showMessage({ message: Strings.VALIDATION_ERROR, description: 'Invaild Email & Password?', type: "danger" });
            }
        }
    }

    //set the input value in state
    const handleChange = (value, name) => {
      setFormValue(formValue => ({...formValue, [name]: value}));
    };

    useEffect(()=>{
    }, [])

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.center}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={{flex: 1.5}}>
                        <UpperCurveSVG width="100%" height="35%"/>
                        <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderWidth: 3, borderColor: Colors.Base_White, marginHorizontal: '10%', borderRadius: 20, position: 'absolute', top: '10%', left: 0, right: 0, bottom: 0}}>
                            <View style={{paddingTop: "7%"}}>
                                <Image source={Images.logoBar} resizeMode='contain' style={{height: 60, width: '100%'}} />
                            </View>
                            <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                                <Text style={{fontWeight: 500, fontSize: 15, color: '#1296b0'}}>Log In</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'flex-end'}}>
                        <LowerCurveSVG width="100%" height="45%" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    listContainer: {
        flex:1, 
        backgroundColor: Colors.Base_White,
    },
    title_format: {
        color: '#fff', 
        fontSize: 23
    },
    center: {
        flex: 1
    },
});