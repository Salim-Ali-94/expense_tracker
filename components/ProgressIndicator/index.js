import { View, Image } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import { styles } from "./styles";


export default function ProgressIndicator({ tint, icon, percent }) {

    return (

        <View style={styles.progressBox}>

            <ProgressCircle style={styles.circle}
                            progress={percent}
                            progressColor={tint}
                            backgroundColor={"transparent"}
                            startAngle={0}
                            cornerRadius={1}
                            strokeWidth={3} />
 
            <Image source={icon}
                   style={styles.imageBox} />

        </View>

    );

}