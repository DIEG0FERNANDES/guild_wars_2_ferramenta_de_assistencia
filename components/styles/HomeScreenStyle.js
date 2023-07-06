import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002727',
  },
  buttonContainer: {
    width: 380,
    marginBottom: 8,
    marginTop: 10,
    backgroundColor: '#00E6E6',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
    backgroundColor: '#06513E',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#06513E',
    textAlign: 'center',
  },
});

export default HomeScreenStyles;
