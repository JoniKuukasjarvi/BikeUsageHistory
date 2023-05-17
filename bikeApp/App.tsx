import { StyleSheet, Text, View } from 'react-native';
import SQLconnection from './components/sqlconnection';
import DetailsScreen from "./components/detailScreen";
import MainMenu from "./components/mainMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen name="Bike Trips" component={SQLconnection} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Main Menu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
