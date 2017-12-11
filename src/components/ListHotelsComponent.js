import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import StarRating from 'react-native-star-rating';

import Icon from 'react-native-vector-icons/FontAwesome'

const hotels = [
    {
        name: "Hotel Emperador",
        stars: 3,
        image: "https://telefono-gratis.com/wp-content/uploads/2017/12/Tel%C3%A9fono-Gratuito-de-Trivago.jpg",
        // images: [
        //     "https://telefono-gratis.com/wp-content/uploads/2017/12/Tel%C3%A9fono-Gratuito-de-Trivago.jpg"
        // ],
        price: "1596"
    },
    {
        name: "Hotel Intercontinental",
        stars: 5,
        image: "https://e.otcdn.com/headers/ilusion/img/hoteles_destinia.jpg",
        // images: [
        //     "https://telefono-gratis.com/wp-content/uploads/2017/12/Tel%C3%A9fono-Gratuito-de-Trivago.jpg"
        // ],
        price: "2500"
    }
];



export default class ListHotelsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data: hotels
        }
    }

    static navigationOptions = {
        headerVisible: false
    }

    filter(text) {
        const data = hotels;
        const newData = data.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text,
        })
    }
    deleteData() {
        this.setState({ text: '', data: '' })
    }

    _renderItem(item) {
        const { navigate } = this.props.navigation

        return (
            <TouchableWithoutFeedback onPress={() => navigate('DetailsHotel', { hotel: item })} >
                <View style={styles.container_item}>
                    <Image style={{ height: 150 }} source={{ uri: item.image }}></Image>
                    <Text style={styles.name_hotel}>{item.name}</Text>
                    <View style={styles.stars}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={item.stars}
                            starSize={25}
                            starColor={'#fec401'}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={styles.input}
                    >
                    </TextInput>
                    <Icon
                        name="search"
                        color="grey"
                        size={18}
                        style={styles.searchIcon}
                    />
                </View>
                <FlatList
                    renderItem={({ item }) => this._renderItem(item)}
                    data={this.state.data}
                    SeparatorComponent={() => <View style={{ width: 5 }} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
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
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
    },
});