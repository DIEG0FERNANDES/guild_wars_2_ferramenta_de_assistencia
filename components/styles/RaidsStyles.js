import { StyleSheet } from "react-native";

const RaidStyles = StyleSheet.create({
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
    raidContainer: {
      width: 380,
      marginBottom: 15,
      marginTop: 15,
      backgroundColor: '#00E6E6',
      padding: 10,
      borderRadius: 10,
    },
    raidName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#06513E',
    },
    raidLocation: {
      fontSize: 14,
      fontStyle: 'italic',
      marginBottom: 5,
      color: '#06513E',
    },
    raidDescription: {
      fontSize: 14,
      color: '#06513E',
    },
  });

  export default RaidStyles;