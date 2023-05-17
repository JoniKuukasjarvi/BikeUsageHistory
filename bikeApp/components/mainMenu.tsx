import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import axios from "axios";
import MainStyles from "./mainStyles";


const MainMenu = ({navigation}) => {
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [stations, setStations] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    fetchPopularPlaces();
    fetchTotalRecords();
  }, []);

  const navigateToBikeTrips = () => {
    navigation.navigate("Bike Trips");
  }

  const fetchPopularPlaces = async () => {
    try {
      const response = await axios.get('http://localhost:8800/stations');
      const sortedPlaces = response.data.sort((a, b) => b.total_records - a.total_records);
      const top10Places = sortedPlaces.slice(0, 10);
      setPopularPlaces(top10Places);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/stations?search=${searchQuery}`);
      setStations(response.data);
    } catch (error) {
      console.error('Error searching stations:', error);
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

  return (
    <View style={MainStyles.container}>
      <View style={MainStyles.section}>
        <Text style={MainStyles.sectionTitle}>Top 10 Popular Places:</Text>
        {popularPlaces.map((place, index) => (
          <Text key={index} style={MainStyles.placeText}>{`${place.name}: ${place.total_records}`}</Text>
        ))}
        <Text>Total bike trips recorded: {totalRecords}</Text>
      </View>
      <View style={MainStyles.section}>
        <TextInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search station..."
          style={MainStyles.input}
        />
        <Button title="Search" onPress={handleSearch} />
        <View>
        <Text style={MainStyles.sectionTitle}>Search Results:</Text>
        {stations.map((station) => (
          <Text key={station.name}  style={MainStyles.placeText}>{`${station.name}: ${station.total_records}`}</Text>
        ))}
      </View>
      </View>
      <Button
          title="Go to Bike Trips"
          onPress={navigateToBikeTrips}
        />
    </View>
  );
};

export default MainMenu;
