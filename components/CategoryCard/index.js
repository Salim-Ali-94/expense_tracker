import { Pressable, View, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function CategoryCard({ icon }) {

    const navigation = useNavigation();

    return (

        <Pressable onPress={() => navigation.navigate("Analytics")}>

            <View style={styles.outline}>

                <View style={styles.card}>

                    <Image source={icon}
                           style={styles.icon} />

                </View>
            
            </View>

        </Pressable>

    );

}