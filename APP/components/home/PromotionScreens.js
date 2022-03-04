import React,{useState} from 'react'
import {View,Text,FlatList,SafeAreaView, StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import constan from '../../controller/Constant'
import {useNavigation} from '@react-navigation/native'

const dataArr = [
    {id : 1,garage: 'Hoang Anh Luc',voucher: '10%',name : ' Giam gia khi thay 4 lop', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 2,garage: 'Hoang Anh Luc',voucher: '10%',name : ' Giam gia chi phi son', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 3,garage: 'Hoang Anh Luc',voucher: '10%',name : ' Giam gia chi phi son', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 4,garage: 'Hoang Anh Luc',voucher: '10%',name : ' Giam gia goi bao duong', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 5,garage: 'Hoang Anh Luc',voucher: '10%',name : ' Giam gia goi sua chua tai nan', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 6,garage: 'Phu Huy',voucher: '10%',name : ' Giam gia phu tung thay the', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 7,garage: 'Phu Huy',voucher: '10%',name : ' Giam gia thay nhot', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 8,garage: 'Phu Huy',voucher: '10%',name : ' Giam gia khi thay 4 lop', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'},
    {id : 9,garage: 'Phu Huy',voucher: '10%',name : ' Giam gia khi thay 4 lop', image :'https://www.leggo.it/photos/MED/38/73/6033873_1202_decreto_sostegni_bis.jpg'}
]

const Promotion = ({route}) =>{

    const navigation = useNavigation()
    const location = route?.params?.location ?? 'DA NANG'

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() =>{navigation.goBack()}}>
                    <Icon name="chevron-back" size={30} color="red" />
                </TouchableOpacity>
                <Text style={{color:'red',fontWeight:'bold',fontSize:18}}>Khuyến mãi</Text>
                <View />
            </View>
            <View style={styles.content}>
                <View style={styles.headerContent}>
                    <TouchableOpacity>
                        <Icon name="funnel-outline" color="red" size={25} />
                    </TouchableOpacity>
                    <View style={styles.input}>
                        <Icon name="search" size={25} style={{marginLeft: 10}}/>
                        <TextInput style={{padding:4,flex:1,marginLeft:5}} placeholder="Tim kiem voucher/Combo" />
                    </View>
                    <TouchableOpacity style={styles.bt} onPress={() =>{navigation.navigate(constan.screenName.ListAddress)}}>
                        <Text style={{marginHorizontal:5}}>{location}</Text>
                        <Icon name="chevron-down" color="red" />
                    </TouchableOpacity>
                </View>
                <View style={styles.list}>
                    <FlatList 
                        data={dataArr}
                        numColumns={2}
                        onPress={() => setSelectedId(item.id)}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity 
                                style={styles.btList}
                                onPress={() => {
                                     navigation.navigate(constan.screenName.DetailPromotion,{item : item});
                                 }}>
                                   <View style={{flex: 1}}>
                                       <Image 
                                            source={{uri : item.image}} 
                                            style={{
                                                width: 180,
                                                height: 150,
                                                borderRadius: 10,
                                            }}
                                            resizeMode='cover'
                                        />
                                        <Image 
                                            source = {constan.icons.git} 
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                bottom:0,
                                                width:80,
                                                height:30
                                            }}   
                                            resizeMode='cover' 
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            bottom: 8,
                                            left: 40,
                                            right: 40
                                        }}>{item.voucher}</Text>
                                   </View>
                                   <View style={{
                                       flex: 1,
                                   }}>
                                        <Text style={{
                                            color: '#000',
                                            flex: 1,
                                            }}
                                            numberOfLines={2}
                                        >
                                            [{item.garage}]{item.name}
                                        </Text>
                                        <View style={{
                                            padding:20
                                        }}>
                                            <TouchableOpacity style={{
                                                position: 'absolute',
                                                padding:5,
                                                left: 50,
                                                right: 50,
                                                bottom: 5,
                                                borderWidth: 1,
                                                borderColor: 'red',
                                                borderRadius:5,
                                                alignItems: 'center',
                                            }}>
                                                <Text>Luu ngay</Text>
                                            </TouchableOpacity>
                                        </View>
                                   </View>
                             </TouchableOpacity>
          )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    content:{
        flex:1
    },
    headerContent:{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    input:{
        marginHorizontal:10,
        flexDirection: 'row',
        borderWidth:1,
        borderColor: 'red',
        alignItems: 'center',
        borderRadius:5,
        width:'60%',
        backgroundColor: '#fff'
    },
    bt:{
        borderWidth: 1,
        borderColor: 'red',
        borderRadius:5,
        flexDirection: 'row',
        paddingVertical:8,
        alignItems: 'center',
        paddingHorizontal:10,
        backgroundColor:'#fff'
    },
    list:{
        marginTop: 10,
        marginHorizontal:5,
        alignItems: 'center',
    },
    btList: {
        padding:5,
        marginBottom:5,
        marginLeft:4,
        paddingHorizontal:5,
        width:'49%',
        alignItems: 'center',
        backgroundColor: '#fff'
        
    }
})

export default Promotion

