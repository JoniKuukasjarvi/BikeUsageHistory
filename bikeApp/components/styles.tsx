import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8F8F8",
      paddingHorizontal: 16,
      paddingVertical: 24,
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    itemContainer: {
        backgroundColor: "#E1F5FE",
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        cursor: "pointer",
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        minWidth: 450,
        maxWidth: 700,
      },
      leftContent: {
        flex: 1,
      },
      rightContent: {
        flex: 1,
        alignItems: 'flex-end',
      },
      text: {
        marginBottom: 5,
      },






  });