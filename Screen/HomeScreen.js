import React, { useEffect, useState } from 'react'
import { View, Text,ScrollView } from 'react-native'

import { Card, ListItem, Button, Icon,Image } from 'react-native-elements'
export default function HomeScreen({navigation}) {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams),console.log(teams))
    },[])
    const handlePress=(id)=>{
        console.log(id);
        navigation.navigate('TeamDetails',{
            id
          })}
      
    

    return (
        <View style={{backgroundColor: "#293b5f"}}>
            <ScrollView style={{}}>
           <Image
  source={require('./../Images/premier-league.jpg') }
  style={{  height: 200 }}
/>

  {
      teams.map(team=>(  <Card key={team.idTeam}>
        <Card.Title>{team.strTeam}</Card.Title>
        <Card.Divider/>
        <View style={{margin:15,flex:1,  alignItems: 'center',
    justifyContent: 'center'}}>
        <Card.Image source={{
          uri: team.strTeamBadge }}
          style={{ height: 320,width:320 }}
       />
        </View>

          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress={() =>handlePress(team.strTeam) }
            title='Explore' />
      
      </Card>))
  }

</ScrollView>

        </View>
    )
}
