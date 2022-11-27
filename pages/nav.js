import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const NavBar = () => {
    return ( 
        <View style={styles.container}>
            <Text>Cryptor</Text>
            <FontAwesome5 name="coins" size={24} color="black" />
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'dodgerblue',
        height: 50,
    },
    text:{

    }
})
 
export default NavBar;