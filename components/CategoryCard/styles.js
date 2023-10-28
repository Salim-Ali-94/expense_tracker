import { StyleSheet } from "react-native";
import * as constants from "../../constants";


export const styles = StyleSheet.create({

    outline: {

        width: 105,
        height: 105,
        borderRadius: 30,
        backgroundColor: constants.pink,
        justifyContent: "center",
        alignItems: "center"
    },

    card: {

        width: 100,
        height: 100,
        backgroundColor: constants.sky,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    icon: {

        width: 90,
        height: 90
    }

});