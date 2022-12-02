import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./home";
import CoinDetails from "./coinDetails";


const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            title:'All Coins'
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
        headerTintColor:'dodgerblue',
        headerStyle:{
            backgroundColor:'#000'
        }
    }
});

export default createAppContainer(HomeStack);