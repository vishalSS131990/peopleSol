import 'text-encoding-polyfill';
const Joi = require('joi');
import { showMessage } from "react-native-flash-message";
import { Strings } from '../../common/constants';
import { PermissionsAndroid } from 'react-native';

//form Validation
export const formValidation = (valObj) => {
    if(valObj.error){
        var getError = (valObj.error).toString().split(":");
        showMessage({ message: Strings.VALIDATION_ERROR, description: getError[1], type: "danger" });
        return false;
    } else {
        return true;
    }
};

//function for get location permission
export const requestLocationPermission = async() => 
{
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{ 'title': 'Restaurant App', 'message': 'Restaurant App access to your location' })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //showMessage({ message: Strings.SUCCESS, description: 'Location Permission Granted', type: "success" });
        } else {
            showMessage({ message: Strings.ERROR, description: 'Location permission denied!', type: "danger" });
        }
    } catch (err) {
        console.warn(err)
    }
}

//validate the signIn obj
export const validate_SignIn_Obj = (req) => {
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }).label('Email'),
      password: Joi.string().required().label('Password'),
    });
    return formValidation(schema.validate(req));
};