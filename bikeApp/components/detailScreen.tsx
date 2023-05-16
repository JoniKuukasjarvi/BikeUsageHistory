import React from "react";
import { View, Text } from "react-native";
import detailStyles from "./detailStyles";

const formatDistance = (distanceInMeters: number) => {
    const kilometers = Math.floor(distanceInMeters / 1000);
    const meters = distanceInMeters % 1000;
  
    return `${kilometers} km ${meters} m`;
  };

const formatDuration = (durationInSeconds: number) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
  
    return `${hours}h ${minutes}m ${seconds}s`;
  };

const DetailsScreen = ({route}) => {
  const { bikeTrip } = route.params;

  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.leftContainer}>
        <Text style={detailStyles.title}>Departure Time:</Text>
        <Text style={detailStyles.text}>{bikeTrip.departure_time}</Text>

        <Text style={detailStyles.title}>Departure Station:</Text>
        <Text style={detailStyles.text}>{bikeTrip.departure_station_name}</Text>
      </View>

      <View style={detailStyles.middleContainer}>
        <Text style={detailStyles.title}>Duration:</Text>
        <Text>{formatDuration(bikeTrip.duration)}</Text>

        <Text style={detailStyles.title}>Covered Distance:</Text>
        <Text>{formatDistance(bikeTrip.covered_distance)}</Text>

      </View>

      <View style={detailStyles.rightContainer}>
        <Text style={detailStyles.title}>Return Time:</Text>
        <Text style={detailStyles.text}>{bikeTrip.return_time}</Text>
      
        <Text style={detailStyles.title}>Return Station:</Text>
        <Text style={detailStyles.text}>{bikeTrip.return_station_name}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;