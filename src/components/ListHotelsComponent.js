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

import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchData } from '../actions/actions';
import { connect } from 'react-redux';


class ListHotelsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            hotels: []
        }
    }

    static navigationOptions = {
        headerVisible: false
    }

    componentWillMount() {
        this.props.fetchData();
    }

    _filterData(text) {
        this.setState({
            text: text
        });
    }

    _clearData() {
        this.setState({ text: '', data: '' })
    }

    _renderItem(item) {
        const { navigate } = this.props.navigation;

        return (
            <TouchableWithoutFeedback onPress={() => navigate('DetailsHotel', { hotel: item })} >
                <View style={styles.container_item}>
                    <Image style={{ height: 150 }} source={{ uri: item.images[0] }}></Image>
                    <View style={styles.container_text}>
                        <View>
                            <Text style={styles.name_hotel}>{item.name}</Text>
                            <View style={styles.stars}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={parseInt(item.stars)}
                                    starSize={25}
                                    starColor={'#fec401'}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.price_night}>Precio por noche</Text>
                            <Text style={styles.price_value}>{item.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    }

    render() {
        const dataFilter = this.state.text
            ? this.props.dataHotels.data.hotels.filter(item => {
                return item.name.indexOf(this.state.text) > -1;
            })
            : this.props.dataHotels.data.hotels;
        const dataSource = dataFilter;


        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    {!this.state.text ?
                        <Icon
                            name="search"
                            color="grey"
                            size={18}
                            style={styles.searchIcon}
                        />
                        : null}
                    <TextInput
                        value={this.state.text}
                        onChangeText={this._filterData.bind(this)}
                        style={styles.input}
                    >
                    </TextInput>
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this._clearData()}>
                            <Icon
                                name="times-circle"
                                color="grey"
                                size={18}
                                style={styles.iconInputClose}
                            />
                        </TouchableWithoutFeedback>
                        : null}
                </View>
                <FlatList
                    renderItem={({ item }) => this._renderItem(item)}
                    data={dataSource}
                    keyExtractor={item => item._id}
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
    container_text: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
    },
    name_hotel: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
        marginTop: 10
    },
    stars: {
        width: 50,
        marginLeft: 10,
        marginBottom: 15,
    },
    price_night: {
        fontSize: 10,
        marginRight: 10,
        marginTop: 10
    },
    price_value: {
        color: '#fec401',
        fontSize: 22,
        marginRight: 10,
        fontWeight: 'bold'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
    },
    iconInputClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'transparent',
        zIndex: 1
    }
});

const mapStateToProps = state => {
    return {
        dataHotels: state.dataHotels
    }
}

const mapDispatchProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(ListHotelsComponent);