import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import config from '../../controller/Constant'
import {useNavigation} from '@react-navigation/native'

const DetailPromotion = ({route}) =>{

    const item = route?.params?.item
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() =>{navigation.goBack()}}>
                    <Icon name="chevron-back" size={30} color="red" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Voucher/Combo</Text>
                <TouchableOpacity>
                    <Icon name="share-social" size={30} color="red" />
                </TouchableOpacity>
            </View>
            <ScrollView style ={styles.body}>
                <View>
                    <Image source={{uri : item?.image}} style={{
                        width: config.screen.width,
                        height:200
                    }}/>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>[{item?.garage}] {item?.name}</Text>
                    <Text style={{marginHorizontal:5,marginTop:5}}>[{item?.garage}] {item?.name}</Text>
                    <Text style={{color:'red',marginLeft: 5, fontWeight: 'bold',fontSize: 20,marginTop:10}}>{item?.voucher}</Text>
                    <View style={styles.detail}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Icon name="download-outline"  size={15}/>
                            <Text>2 luot luu</Text>
                        </View>
                        <View />
                        <View>
                            <Text> con lai : 28</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bodyBottom}>
                    <Text style={{marginHorizontal:5,fontWeight: 'bold',color:'#000'}}>Ap dung tai garage</Text>
                     <View style={styles.address}>
                        <Image source={config.icons.garagebanner} style={{width:50,height:50}}/>
                        <View style={{marginHorizontal:5}}>
                            <Text style={{color:'#000',fontWeight: 'bold',fontSize:16}}>Garage {item?.garage}</Text>
                            <Text>adress</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.btBottom}>
                    <Text style={{color:'#fff'}}>Luu ngay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textHeader:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    },
    body:{
        flex: 1,
    },
    title: {
        backgroundColor: '#fff'
    },
    textTitle:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal:5,
        marginTop:5
    },
    detail: {
        marginHorizontal:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5
    },
    bodyBottom: {
        marginTop:10,
        backgroundColor: '#fff',
    },
    address: {
        marginTop: 10,
        marginLeft:5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottom: {
        backgroundColor: '#fff',
        padding: 20,
        position: 'absolute',
        bottom:0,
        left: 0,
        right: 0,
    },
    btBottom:{
        backgroundColor: 'red',
        padding:10,
        marginHorizontal:130,
        alignItems: 'center',
        borderRadius:5
    }
})

export default DetailPromotion