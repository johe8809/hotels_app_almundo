import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';
import StarRating from 'react-native-star-rating';

import Icon from 'react-native-vector-icons/FontAwesome'


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
                    <TouchableHighlight
                        style={styles.closeButton}
                        onPress={() => goBack()}
                    >
                        <Icon
                            name="arrow-left"
                            color="white"
                            size={25}
                        />
                    </TouchableHighlight>
                    <Text style={ styles.text_header }>Lista de hoteles</Text>
                </View>
                <View style={styles.container_item}>
                    <Text style={styles.name_hotel}>{params.hotel.name}</Text>
                    <View style={styles.stars}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={params.hotel.stars}
                            starSize={25}
                            starColor={'#fec401'}
                        />
                    </View>
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
    }
});