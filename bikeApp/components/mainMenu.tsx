import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import axios from "axios";

const MainMenu = () => {
    
{/*
      const [departureStationCounts, setDepartureStationCounts] = useState({});
      const [searchTerm, setSearchTerm] = useState("");
    
      useEffect(() => {
        fetchDepartureStationCounts();
      }, []);
    
      const fetchDepartureStationCounts = async () => {
        try {
          const res = await axios.get("http://localhost:8800/biketrips?search=" + searchTerm);
          const counts = countDepartureStations(res.data.data);
          setDepartureStationCounts(counts);
        } catch (err) {
          console.log(err);
        }
      };
      const countDepartureStations = (data) => {
        const counts = {};
      
        data.forEach((item) => {
          const { departure_station_name, total_records } = item;
          if (departure_station_name) {
            counts[departure_station_name] = total_records;
          }
        });
      
        return counts;
      };
    
      const handleSearch = () => {
        fetchDepartureStationCounts();
      };
    
      return (
        <View>
          <Text>Popular Places:</Text>
          {Object.entries(departureStationCounts).map(([place, count]) => (
            <Text key={place}>{`${place}: ${count}`}</Text>
          ))}
          <Text>Search Trips:</Text>
          <TextInput
            placeholder="Enter search term..."
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
          />
          <Button onPress={handleSearch} title="Search" />
        </View>
      );
          */}
};

export default MainMenu;