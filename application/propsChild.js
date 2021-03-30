import React from 'react';
import {View, Text} from 'react-native';

const PropsChild = (props) => {
    return (
        <View>
            <Text onPress={props.changeState}>
                {props.sampleText}
            </Text>
        </View>
    )
}

export default PropsChild;