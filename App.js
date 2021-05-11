import React, {useEffect, useState} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {Films} from "./src/components/Films";

// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=37b7d1fc"

export const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    input: {
        height: 30,
        width:200,
        margin: 5,
        borderWidth: 1,
        textAlign:"center"
    },

    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom:30
    },

    StarImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },

    imageStyle: {
        width:250,
        height:250,
        marginBottom:10
    },

    ratingStyle: {
        fontWeight:'bold',
        marginBottom:30,
        fontSize:15,
        color:'#FFA500'
    },

    titleStyle: {
        fontWeight:'bold',
        marginBottom:30,
        fontSize:15,
    },

    mainTitleStyle:{
        fontWeight:'bold',
        marginBottom:30,
        fontSize:30,
        textAlign:'center'
    },

    ratingAndTitleStyleView: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },

})

export default function App(props) {
/*  const [films, setFilms] = useState([]);
  useEffect( () => {
     fetch(url)
         .then((response) => response.json())
         .then((data) => {
           setFilms(data)
         })

  },[])*/

  return (
      <Films />
  );
}

