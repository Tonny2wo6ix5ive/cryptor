import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./home";
import CoinDetails from "./coinDetails";


const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            title:'Home'
        }
    },
    CoinDetails:{
        screen: CoinDetails,
        navigationOptions:{
            title:'Coin Details'
        }
    },
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#0c0c49',
        headerStyle:{
            backgroundColor:'#c0c0c0'
        }
    }
});

export default createAppContainer(HomeStack);