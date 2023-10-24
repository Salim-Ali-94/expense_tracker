import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import * as constants from "../../constants";


export default function GradientCard() {

    return (

        <LinearGradient colors={[ constants.purple, constants.blue ]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        locations={[ 0, 0.5 ]}
                        style={styles.card} />

    );

};
