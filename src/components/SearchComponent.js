import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native'

const { width, height } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'
// import { getAll } from '../api/api'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    filter(text) {
        const data = [];
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
            <TouchableWithoutFeedback onPress={
                () => navigate('Details', { item: item })}
            >
                <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }} />
            </TouchableWithoutFeedback>
        )
    }
    render() {
        const { goBack } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon
                        name="search"
                        color="grey"
                        size={18}
                        style={styles.searchIcon}
                        position="right"
                    />
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="grey"
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon
                                name="times-circle"
                                color="grey"
                                size={18}
                                style={styles.iconInputClose}
                            />
                        </TouchableWithoutFeedback>
                        : null}
                    <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => goBack()}>
                        <View style={styles.containerButton}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList
                        style={{ marginHorizontal: 5 }}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{ marginTop: 5, marginLeft: 5 }}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 40,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
        color: 'grey'
    },
    cancelButtonText: {
        color: 'white'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
});