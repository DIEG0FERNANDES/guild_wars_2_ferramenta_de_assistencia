import { StyleSheet } from 'react-native';

const WorldBossesStyles = StyleSheet.create({
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
      color: 'white',
    },
    bossContainer: {
      width: 380,
      marginBottom: 8,
      marginTop: 10,
      backgroundColor: '#00E6E6',
      padding: 10,
      borderRadius: 10,
    },
    bossName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#06513E',
      textAlign: 'center'
    },
    bossLocation: {
      fontSize: 14,
      fontStyle: 'italic',
    },
    bossStatus: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  export default WorldBossesStyles;