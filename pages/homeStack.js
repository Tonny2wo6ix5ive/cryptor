import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./home";
import CoinDetails from "./coinDetails";


const screens = {
    Home:{
        screen: Home
    },
    CoinDetails:{
        screen: CoinDetails
    },
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);