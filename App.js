
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount]=useState(0)
  const[data,setData]=useState(100)

  return (
    <View >
      <Text style={styles.container}>useEffect as component did update</Text>
      
      <User info={{data,count}}/>
      <View style={{marginBottom:80}}></View>
  
      <Button title='update Counter' onPress={()=>setCount(count+1)}/>
        <View style={{marginTop:10,}}></View>
      <Button title='update data' onPress={()=>setData(data+1)}/>
      <View style={{marginTop:10,}}></View>

      <Button title='reset' onPress={()=>{ setData(100), setCount(0),console.warn("everything is reset")}}/>
        
       
      
    </View>
  );
}

const User=(props)=>{

  useEffect(()=>{

    console.warn("data are updated");
    
  },[props.info.data])
  useEffect(()=>{

    console.warn("count are updated");
    
  },[props.info.count])

  return (
    <View >
      <Text style={styles.txt}>Count : {props.info.count}</Text>
      <Text style={styles.txt}>Data : {props.info.data}</Text>
     
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
   marginTop:20,
    backgroundColor: '#fff',
    fontSize:30,
    backgroundColor:"red",
    padding:10,
    color:"white",
    marginBottom:100,
   
  },
  txt:{
    fontSize:30,
    backgroundColor:"black",
    color:"white",
    textAlign:"center",
    padding:40,
    margin:20
  }
});
