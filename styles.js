import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    cardSection: {

        marginTop: 80,
        marginBottom: 20,
        alignItems: "center"
    },

    carousel: {

        flexDirection: "row",
        width: "107%",
        justifyContent: "space-around",
        marginTop: 30,
        paddingRight: 30
    },

    header: {

        marginTop: 30,
        width: "100%",
        alignItems: "center",
    },

    greetingContainer: {

        width: "80%"
    },

    row: {

        flexDirection: "row",
        width: "92%",
        justifyContent: "space-between"
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
    },

    objectivesSection: {

        width: "100%",
        alignItems: "center",
        marginTop: 10
    },

    headingContainer: {

        width: "92%",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // marginBottom: 20
        marginBottom: 16
    },

    heading: {

        fontFamily: "poppins_medium",
        // fontFamily: "poppins_bold",
        color: "#ffffff",
        // fontSize: 26
        fontSize: 24
    }

});
