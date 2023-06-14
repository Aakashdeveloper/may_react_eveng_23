import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image
  } from 'react-native';

const Display = (props) => {

    const renderList =({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View key={item._id}>
                        <Image source={{uri:item.restaurant_thumb}}
                        style={styles.RestImg}/>
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
       <View>
           <ScrollView style={styles.container}>
               {renderList(props)}
           </ScrollView>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    text:{
        fontSize:45
    },
    RestImg:{
        width:180,
        height:180
    }
})

export default Display