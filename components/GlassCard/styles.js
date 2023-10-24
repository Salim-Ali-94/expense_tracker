import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

    card: {
        
        overflow: "hidden", 
        borderRadius: 20,
        width: "90%"
    },

    blur: {
        
        height: 200,
        backgroundColor: "rgba(0, 0, 0, 0.1)"
    },

    box: {

        padding: 20,
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "transparent"
    },

    row: {

        flexDirection: "row"
    },

    heading: {

        fontFamily: "poppins_regular",
        fontSize: 16,
        color: "#ffffff"
    },

    bigText: {

        fontFamily: "poppins_semi_bold",
        fontSize: 32,
        color: "#ffffff"
    },

    valueText: {

        fontFamily: "poppins_medium",
        fontSize: 24,
        color: "#ffffff"
    },

    expenseBox: {

        flex: 0.6
    },

    profitBox: {

        flex: 0.69
    }

});