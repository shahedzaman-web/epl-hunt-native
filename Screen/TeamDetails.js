import React, { useEffect, useState } from 'react'
import { View,ScrollView,StyleSheet,Linking } from 'react-native'
import { Image ,Text,Button} from 'react-native-elements';

export default function TeamDetails(props) {
    const id=props.route.params.id;

    const [details,setDetails]=useState({});
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${id}`;
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetails(data.teams[0]));
     
    },[id])
   
    const {strDescriptionEN,intFormedYear,strTeam,strTeamBadge}=details;

    return (
        <ScrollView style={{backgroundColor: '#fdfaf6'}}>
            <View style={{flex:1,alignItems: 'center',
    justifyContent: 'center'}}>
 <Text h4 >Team: {strTeam}</Text>
 <Text >Founded: {intFormedYear}</Text>
    </View>
           
            <View style={styles.header}>
                <Image source={{
          uri: strTeamBadge }}
          style={{ height: 200,width:200 }}/>
          <View>
          
         
          


          
          </View>
            </View>
            <View style={{margin:5}}>
            <Text>{strDescriptionEN}</Text>

            </View>
           
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection:'row',
      marginTop: 10,
      alignItems: 'center',
    justifyContent: 'center'
     

    },
  });
  