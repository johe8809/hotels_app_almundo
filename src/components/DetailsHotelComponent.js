import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TextInput,
    TouchableNativeFeedback,
    Dimensions
} from 'react-native';
import StarRating from 'react-native-star-rating';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const Slider = props => (
    <View style={styles.container_slider}>
        <Image style={styles.image_slider} source={{ uri: props.uri }} />
    </View>
)

export default class DetailsHotelComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imagesSlider: []
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation;

        this.state.imagesSlider = params.hotel.images;

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
                    <View style={styles.text_address}>
                        <Text>
                            <Icon
                                name="map-marker"
                                color="gray"
                                size={25}

                            />
                            {'   ' + params.hotel.address}
                        </Text>
                    </View>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: parseFloat(params.hotel.latitude),
                            longitude: parseFloat(params.hotel.longitude),
                            latitudeDelta: 0.004757,
                            longitudeDelta: 0.006866,
                        }}
                        showsUserLocation={true}
                        showsMyLocationButton={false}
                        zoomEnabled={true}
                    >
                        <MapView.Marker
                            coordinate={{ latitude: parseFloat(params.hotel.latitude), longitude: parseFloat(params.hotel.longitude) }}
                            title={params.hotel.name}
                            description={params.hotel.address}
                        />
                    </MapView>
                </View>
                <View style={{ flex: 1, marginBottom: 20 }}>
                    <Swiper
                        autoplay
                        height={240}
                    >
                        {
                            this.state.imagesSlider.map((item, i) => <Slider
                                uri={item}
                                key={i}
                            />)
                        }

                    </Swiper>
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
        marginTop: 5
    },
    stars: {
        width: 50,
        marginLeft: 10,
        marginBottom: 5,
    },
    text_address: {
        marginLeft: 25,
        marginBottom: 5,
    },
    map: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
    },
    container_slider: {
        flex: 1,
        justifyContent: 'center'
    },
    image_slider: {
        flex: 1,
        width
    }
});