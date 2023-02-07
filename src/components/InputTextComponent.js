import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors, FontSize, Strings } from "../common/constants";
import TextComponent from "../components/TextComponent";
import Icon from 'react-native-vector-icons/FontAwesome';

export default InputTextComponent = ({inputLableText, multilineHeight=120, keyboardType='default', showEye, backgroundColor=Colors.INPUT_LIGHT_PURPAL, customIcon, inputValue, width, multiline=false, numberOfLines=1, placeholder, name, dropDown=false, btnStatus, btnReqFor, openBottomSheet, dropDownFor, onChange, returnKey='next', blurOnSubmit=false, onSubmitEditing=null, text, onRef, color, fontWeight, changeVisibiltyStatus}) => {
    
    const [ secureEntry, setSecureEntry ] = useState(showEye?true:false);
    const [ value, setValue ] = useState();

    var focusValue = inputValue===undefined?false:inputValue==""?false:true;

    const labelStyle = {
        position: "absolute",
        left: 3,
        width: width?width: '100%',
        top: !focusValue && (value==''||value==undefined) ? 13 : 4,
        fontSize: !focusValue && (value==''||value==undefined) ? 16 : 10,
        color: !focusValue && (value==''||value==undefined) ? Colors.SECONDARY_DARK_GREAY : Colors.BASE_BLACK,
    };

    return (
        <View>
            <View style={[styles.textInput, {backgroundColor: backgroundColor, borderWidth: 2, borderColor: Colors.INPUT_LIGHT_PURPAL}]}>
                <TouchableOpacity style={{flexDirection: 'row', width: width?width: '95%' }} onPress={()=>openBottomSheet(dropDownFor||btnReqFor)}>
                    <Text style={labelStyle}>{placeholder}</Text>
                    <TextInput
                        style={{ height: multiline?multilineHeight:50, width: '100%', textAlignVertical: multiline?'top':'center', top: multiline?10:0, color: Colors.INPUT_DARK_GREAY }}
                        // placeholder={placeholder}
                        secureTextEntry={secureEntry}
                        returnKeyType={returnKey}
                        name={name}
                        value={inputValue}
                        editable={dropDown||btnStatus?false:true}
                        onSubmitEditing={()=>onSubmitEditing()}
                        blurOnSubmit={blurOnSubmit}
                        keyboardType={keyboardType}
                        ref={onRef}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        onChange={(e)=>[onChange(e.nativeEvent.text), setValue(e.nativeEvent.text)]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        paddingHorizontal: hp('1%'),
        marginVertical: 8,
        borderRadius: 6,
    },
    iconEvent: {
        justifyContent: 'center',
        width: 25,
        alignItems: 'flex-start',
    }
});
