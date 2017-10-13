import React from 'react';
import { TextInput, View } from 'react-native';

const Field = (props) => {
    return (
        <View style={{height: props.height}}>
            <TextInput
            placeholder={props.placeHolder}
            fontSize={props.fontSize} opacity={props.opacity} />
        </View>
    );
};

export default Field;
