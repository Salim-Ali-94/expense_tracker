import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    row: {
        
        width: "92%",
        flexDirection: "row",
        // backgroundColor: "deeppink"
    },

    dataSection: {

        // marginLeft: 16,
        marginLeft: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        // width: "100%",
        flex: 1,
        // alignItems: "center",
        // backgroundColor: "lightblue"
    },

    heading: {
        
        color: "#ffffff",
        fontFamily: "poppins_medium",
        fontSize: 24
    },

    value: {

        fontFamily: "poppins_regular",
        fontSize: 18,
        // fontSize: 16,
        color: "#ffffff"
    },

    progress: {

        fontFamily: "poppins_medium",
        // fontFamily: "poppins_bold",
        color: "#ffffff",
        fontSize: 42
    }

});