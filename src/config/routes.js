import App from '../App';
import SearchComponent from '../components/SearchComponent';
import DetailsHotelComponent from '../components/DetailsHotelComponent';

const Routes = {
    Home: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    DetailsHotel: {
        screen: DetailsHotelComponent,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },

}

export default Routes;