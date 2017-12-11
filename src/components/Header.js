import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableNativeFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (

    <View style={styles.container}>
        <TouchableNativeFeedback onPress = {() => props.toggle()} >
            <Icon name="bars" color="white" size={25} />
        </TouchableNativeFeedback>
        <Text style={{ fontWeight: 'bold', color: '#fff'}}>HOTELS APP</Text>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ea6422',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default Header;