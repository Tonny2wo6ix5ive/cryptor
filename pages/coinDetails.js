import { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import axios from "axios";
import coinId from './home'

const CoinDetails = ({navigation}) => {

    const [coinDet, setCoinDet] = useState({
        Name: "",
        price_usd: "",
        price_btc:"",
        volume24:0
    });

    useEffect(()=>{
        axios.get(`https://api.coinlore.net/api/ticker/?id=${coinId}`).then((promise)=>{
            setCoinDet({
                Name: promise.data[0].name,
                price_usd: promise.data[0].price_usd,
                price_btc:promise.data[0].price_btc,
                volume24:promise.data[0].volume24
            });
        })
    },[]);

    return ( 
        <View>
            <Text>Name: {coinDet.Name}</Text>
            <Text>price_usd: ${coinDet.price_usd}</Text>
            <Text>price_btc: {coinDet.price_btc}</Text>
            <Text>Volume in last 24hrs: {coinDet.volume24}</Text>
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
    }
})

export default CoinDetails;