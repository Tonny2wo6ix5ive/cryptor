import { StyleSheet, Text, View } from "react-native";

const CoinDetails = ({navigation}) => {

    return ( 
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>{navigation.getParam('name')}</Text>
                <Text style={styles.text}>${navigation.getParam('price_usd')}</Text>
            </View>
            <View style={styles.viewContainer}>
                <View style={styles.coinContainer}>
                    <Text style={styles.CoinList}>Coin Symbol</Text>
                    <Text style={styles.CoinListDet}>{navigation.getParam('symbol')}</Text>
                </View>
                <View style={styles.coinContainer}>
                    <Text style={styles.CoinList}>Price in BTC</Text>
                    <Text style={styles.CoinListDet}>{navigation.getParam('price_btc')}</Text>
                </View>
                <View style={styles.coinContainer}>
                    <Text style={styles.CoinList}>Price Change in 1hr</Text>
                    <Text style={styles.CoinListDet}>{navigation.getParam('percent_change_1h')}%</Text>
                </View>
                <View style={styles.coinContainer}>
                    <Text style={styles.CoinList}>Price Change in 24hrs</Text>
                    <Text style={styles.CoinListDet}>{navigation.getParam('percent_change_24h')}%</Text>
                </View>
                <View style={styles.coinContainer}>
                    <Text style={styles.CoinList}>Market Cap ($)</Text>
                    <Text style={styles.CoinListDet}>{navigation.getParam('market_cap_usd')}</Text>
                </View>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0c0c49',
    },
    view:{
        textAlign:'center',
        backgroundColor:'#c0c0c0',
        display:'flex',
        marginTop:24,
        marginHorizontal:30,
        alignItems:'center',
        padding:30,
        borderRadius:10,
    },
    text:{
        fontWeight:'bold',
        color:'#0c0c49',
        fontSize: 24,
        fontFamily:'monospace',
        marginTop:8,
        marginHorizontal:10,
    },
    viewContainer:{
        marginHorizontal:20,
        marginTop:30,
        fontFamily:'monospace'
    },
    coinContainer:{
        display:'flex',
        flexDirection:'row',
        borderBottomColor:'#c0c0c0',
        borderBottomWidth:1,
        marginTop:30,
        padding:5,
    },
    CoinList:{
        color:'#c0c0c0',
        width:180,
        fontFamily:'monospace'
    },
    CoinListDet:{
        color:'#c0c0c0',
        width:130,
        textAlign:'right',
        fontFamily:'monospace'
    }
})

export default CoinDetails;