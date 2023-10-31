import { StyleSheet } from "react-native";
import * as constants from "../../constants";


export const styles = StyleSheet.create({

    row: {
        
        width: "92%",
        flexDirection: "row",
        alignItems: "center"
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
        
        // color: "#ffffff",
        color: constants.metal,
        fontFamily: "poppins_medium",
        fontFamily: "poppins_bold",
        // fontSize: 24
        fontSize: 18
    },

    value: {

        fontFamily: "poppins_regular",
        // fontFamily: "poppins_medium",
        // fontSize: 18,
        fontSize: 16,
        // color: "#ffffff",
        color: constants.metal,
    },

    progress: {

        // fontFamily: "poppins_medium",
        fontFamily: "poppins_regular",
        // fontFamily: "poppins_bold",
        // color: "#ffffff",
        color: constants.metal,
        // fontSize: 42

        // fontSize: 32
        // fontSize: 28

        // fontSize: 24
        fontSize: 20
    }

});