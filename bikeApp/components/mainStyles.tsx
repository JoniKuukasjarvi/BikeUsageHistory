import { StyleSheet } from "react-native";

const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "80%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
  },
  placeText: {
    marginBottom: 5,
  },
});

export default MainStyles;