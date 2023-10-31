import { StyleSheet } from "react-native";
import * as constants from "../../constants";


export const styles = StyleSheet.create({

    row: {
        
        width: "92%",
        flexDirection: "row",
        alignItems: "center"
    },

    dataSection: {

        marginLeft: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1
    },

    heading: {
        
        color: constants.metal,
        fontFamily: "poppins_bold",
        fontSize: 18
    },

    value: {

        fontFamily: "poppins_regular",
        fontSize: 16,
        color: constants.metal,
    },

    progress: {

        fontFamily: "poppins_regular",
        color: constants.metal,
        fontSize: 20
    }

});