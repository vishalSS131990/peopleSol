import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from "../common/constants";
import { getColor, textStyle } from '../common/helper/getThemes';

export default TextComponent = ({text, margin=0, numOfLine=0, color=null, fontSize=null, styleProfile}) => {
    return (
        <View>
            <Text numberOfLines={numOfLine} style={{ color: color == null ? Colors.BASE_BLACK : color, flexWrap: 'wrap', marginVertical: margin, fontSize: fontSize==null ? textStyle(styleProfile).fontSize : fontSize, fontWeight: textStyle(styleProfile).fontWeight, fontFamily: textStyle(styleProfile).fontFamily}}>{text}</Text>
        </View>
    );
}