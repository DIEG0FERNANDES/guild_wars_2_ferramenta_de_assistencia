import { StyleSheet } from "react-native";

const MetaEventsStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#002727',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    eventContainer: {
        marginBottom: 10,
        backgroundColor: '#00E6E6',
        padding: 10,
        borderRadius: 10,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#06513E',
    },
    eventLocation: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 5,
        color: '#06513E',
    },
    eventDescription: {
        fontSize: 14,
        color: '#06513E',
    },
});
export default MetaEventsStyles;