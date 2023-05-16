import React from 'react';
import { StyleSheet } from 'react-native';

const detailStyles = StyleSheet.create({
    container: {
      backgroundColor: "#E1F5FE",
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      cursor: "pointer",
      flexDirection: "row",
      minWidth: 400,
      maxWidth: 1000, 
      justifyContent: "space-between",
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    leftContainer: {
      width: "40%",
      paddingRight: 16,
    },
    middleContainer: {
      width: "35%",
      paddingRight: 16,
      paddingLeft: 16,
    },
    rightContainer: {
      width: "25%",
      paddingLeft: 16,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 8,
    },
    text: {
      marginBottom: 8,
    },
  });
  
  export default detailStyles;