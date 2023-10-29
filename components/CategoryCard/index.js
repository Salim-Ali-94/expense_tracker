import { Pressable, View, Image } from "react-native";
import { styles } from "./styles";


export default function CategoryCard({ icon }) {

    return (

        <Pressable onPress={() => alert("clicked on card")}>

            <View style={styles.outline}>

                <View style={styles.card}>

                    <Image source={icon}
                        style={styles.icon} />

                </View>
            
            </View>

        </Pressable>

    );

}