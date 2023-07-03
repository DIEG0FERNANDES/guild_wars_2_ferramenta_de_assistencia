import { StyleSheet } from "react-native";

const DungeonsStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#002727',
    },
    scrollView: {
      width: '100%',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    dungeonContainer: {
      width: 380,
      marginBottom: 15,
      marginTop: 15,
      backgroundColor: '#00E6E6',
      padding: 10,
      borderRadius: 10,
    },
    dungeonName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#06513E',
    },
    dungeonLocation: {
      fontSize: 14,
      fontStyle: 'italic',
      marginBottom: 5,
      color: '#06513E',
    },
    dungeonDescription: {
      fontSize: 14,
      color: '#06513E',
    },
  });

  export default DungeonsStyles;