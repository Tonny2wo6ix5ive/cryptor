import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Home = ({ navigation }) => {

    const [coin, setcoin] = useState([]);

    useEffect(()=>{
        axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100').then((promise)=>{
            setcoin(promise.data['data']);
        })
    },[]);


    return ( 
        <View style={styles.container}>
            <FlatList
                data={coin}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('CoinDetails', item)}>
                        <View style={styles.view}>
                            <Text style={styles.text}>{item.name}</Text>
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
        backgroundColor:'#0c0c49'
    },
    view:{
        flex:1,
        marginHorizontal:10,
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        paddingVertical:10,
    },
    text:{

        fontWeight:'bold',
        color:'#c0c0c0',
        fontFamily:'monospace'
    }
})

export default Home;