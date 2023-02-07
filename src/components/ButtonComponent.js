import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import TextComponent from "../components/TextComponent";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getColor }  from '../common/helper/getThemes';
import { Colors, FontSize } from '../common/constants';

export default ButtonComponent = ({text, btnType, textColor=null, bgColor=null, btnMargin=0, borderStyle='solid', btnTheme='primary', icon, textFont=null, iconSize, iconColor, outline, clickEvent, width, ph, pv, loaderStatus}) => {
    return (
        <View>
            <TouchableOpacity disabled={loaderStatus} onPress={()=>clickEvent()}>
                <View style={[styles.buttonContainer, { borderStyle: borderStyle, paddingHorizontal: ph?wp(ph):wp('10%'), paddingVertical: pv?hp(pv):hp('0.5%'), width: width=='full'? '100%':wp(width), borderRadius: btnType=='round' ? 30 : 5, backgroundColor: outline ? Colors.BASE_WHITE : bgColor == null ? getColor(btnTheme).bgColor : bgColor }]}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        { icon ? <View style={{paddingRight: wp('5%')}}><Icon name={icon} size={iconSize} color={iconColor} /></View> : null }
                        { loaderStatus ? 
                            <View style={{padding: 4}}>
                                <ActivityIndicator size="small" color={outline ? getColor(btnTheme).bgColor : getColor(btnTheme).textColor} />
                            </View>
                        :
                            <>
                                <TextComponent styleProfile={'Large4'} text={text} margin={btnMargin} fontSize={textFont} color={ textColor==null ? outline ? getColor(btnTheme).bgColor : getColor(btnTheme).textColor : textColor } />
                            </>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer : {
        borderWidth: 1.5,
        borderColor: Colors.Primary_Light,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});
