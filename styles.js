import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    cardSection: {

        marginTop: 100,
        marginBottom: 20,
        alignItems: "center"
    },

    carousel: {

        flexDirection: "row",
        width: "115%",
        justifyContent: "space-around",
        marginTop: 30
    },

    header: {

        marginTop: 30,
        width: "100%",
        alignItems: "center",
    },

    row: {

        flexDirection: "row",
        width: "92%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    greeting: {

        fontFamily: "poppins_bold",
        fontSize: 32,
        color: "#ffffff"
    },

    profile: {

        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },

    img: {

        width: 60,
        height: 60,
        borderRadius: 50
    }

});
