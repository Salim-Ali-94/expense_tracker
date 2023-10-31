import { StyleSheet } from "react-native";
import * as constants from "../../constants";


export const styles = StyleSheet.create({

    outline: {

        width: 107,
        height: 107,
        borderRadius: 20,
        backgroundColor: constants.pink,
        justifyContent: "center",
        alignItems: "center"
    },

    card: {

        width: 100,
        height: 100,
        backgroundColor: constants.sky,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    icon: {

        width: 90,
        height: 90
    }

});