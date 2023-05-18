import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
//Most of the error messages in this component comes from objects that are defined in the mySQL database

const SQLconnection = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const navigation = useNavigation();
    
    useEffect(() => {
        fetchTotalRecords()
        fetchData();
      }, [page]);
    
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/biketrips?page=${page}`, {
            responseType: "json",
            responseEncoding: "utf8",});
          const formattedData = formatData(res.data.data);
          setData((prevData) => [...prevData, ...formattedData]);
          setTotalPages(res.data.total_pages);
        } catch (err) {
          console.log(err);
        }
      };
      
      const fetchTotalRecords = async () => {
        try {
          const res = await axios.get("http://localhost:8800/biketrips/");
          setTotalRecords(res.data.total_records);
        } catch (err) {
          console.log(err);
        }
      };

      const formatData = (data: any[]) => {
        return data.map((item) => ({
          ...item,
          departure_time: new Date(item.departure_time).toLocaleString(),
          return_time: new Date(item.return_time).toLocaleString(),
        }));
      };
    

      const goToNextPage = () => {
        if (page < totalPages) {
          setPage((prevPage) => prevPage + 1);
          
        }
      };
    
      const goToPreviousPage = () => {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
          
        }
      };

      

      const visibleData = data.slice((page - 1) * 10, page * 10);

      const handleItemClick = (bikeTrip: never) => {
        navigation.navigate( "Details", { bikeTrip });
      };

    return(
        <View style={styles.container}>
            <Text>Total bike trips {totalRecords}</Text>
            
            <View> {visibleData.map(item =>(
                <TouchableOpacity key={item.id}
                 style={styles.itemContainer}
                 onPress={() => handleItemClick(item)}
                 >
                     <View style={styles.leftContent}>
                        <Text style={styles.text}>{item.departure_time}</Text>
                        <Text style={styles.text}>{item.departure_station_name}</Text>
                     </View>

                     <View style={styles.rightContent}>
                        <Text style={styles.text}>{item.return_time}</Text>
                        <Text style={styles.text}>{item.return_station_name}</Text>
                     </View>
                </TouchableOpacity> 
            ))}
            <View style={{alignItems: 'center'}}>
            <Text>page: {page}</Text>
            <Text>Total pages: {totalPages}</Text>
            </View>
            
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Button onPress={()=>goToPreviousPage()} title="Previous Page" disabled={page === 1} />
                <Button onPress={()=>goToNextPage()} title="Next Page" disabled={page === totalPages} />
                
            </View>
            
          </View>
    )

}

export default SQLconnection;