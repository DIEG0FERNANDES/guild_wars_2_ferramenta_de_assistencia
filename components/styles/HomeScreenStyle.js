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
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#06513E',
        textAlign: 'center',
    },
});

export default HomeScreenStyles;