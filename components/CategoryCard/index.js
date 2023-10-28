import { View, Image } from "react-native";
import { styles } from "./styles";


export default function CategoryCard({ icon }) {

    return (

        <View style={styles.outline}>

            <View style={styles.card}>

                <Image source={icon}
                       style={styles.icon} />

            </View>
        
        </View>

    );

}