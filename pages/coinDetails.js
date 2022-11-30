import { StyleSheet, Text, View } from "react-native";

const CoinDetails = ({navigation}) => {

    return ( 
        <View>
            <Text style={styles.text}>Name: {navigation.getParam('name')}</Text>
            <Text style={styles.text}>price is usd: ${navigation.getParam('price_usd')}</Text>
            <Text style={styles.text}>price in Bitcoin: {navigation.getParam('price_btc')}</Text>
            <Text style={styles.text}>% Change in 24hrs: {navigation.getParam('percent_change_24h')}%</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    view:{
        flex:1,
        marginHorizontal:10,
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        display:'flex',
        alignItems:'stretch',
    },
    text:{
        fontWeight:'bold',
        color:'gray',
        fontSize: 24,
        marginTop:8,
        marginHorizontal:10,
    }
})

export default CoinDetails;