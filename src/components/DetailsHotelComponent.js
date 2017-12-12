import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';
import StarRating from 'react-native-star-rating';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class DetailsHotelComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            measuresTitle: 0,
            measuresSeason: 0,
            currentSeason: 1
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableNativeFeedback
                        style={styles.closeButton}
                        onPress={() => goBack()}
                    >
                        <Icon
                            name="arrow-left"
                            color="white"
                            size={25}
                        />
                    </TouchableNativeFeedback>
                    <Text style={styles.text_header}>{params.hotel.name}</Text>
                </View>
                <View style={styles.container_item}>
                    <Text style={styles.name_hotel}>{params.hotel.name}</Text>
                    <View style={styles.stars}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={parseInt(params.hotel.stars)}
                            starSize={25}
                            starColor={'#fec401'}
                        />
                    </View>
                </View>
                <View style={{flex:1, alignSelf: 'stretch'}}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ea6422',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    text_header: {
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft: 30
    },
    container_item: {
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 5
    },
    name_hotel: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10
    },
    stars: {
        width: 50,
        marginLeft: 10,
        marginBottom: 15,
    },
    map: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
    }
});