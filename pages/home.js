import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    const [coin, setcoin] = useState([]);

    useEffect(()=>{
        axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100').then((promise)=>{
            setcoin(promise.data['data']);
        })
    },[]);

    const pressHandler = ()=>{
        navigation.navigate('CoinDetails');
    }

    const getId = ()=>{

    }

    return ( 
        <View style={styles.container}>
            <FlatList
                data={coin}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={pressHandler}>
                        <View style={styles.view}>
                            <Text style={styles.text}>{item.symbol}</Text>
                            <Text style={styles.text}>Price: ${item.price_usd}</Text>
                            <Text style={styles.text}>Rank: {item.rank}</Text>                            
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
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

export default Home;