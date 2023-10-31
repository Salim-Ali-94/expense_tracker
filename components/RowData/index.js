import { View, Text } from "react-native";
import ProgressIndicator from "../ProgressIndicator";
import { styles } from "./styles";


export default function RowData({ category, target, actual, icon, tint, gap }) {

    return (

        <View style={[styles.row, { marginBottom: gap }]}>

            <ProgressIndicator tint={tint}
                               percent={actual / target}
                               icon={icon} />


            <View style={styles.dataSection}>

                <View>

                    <Text style={styles.heading}>{category}</Text>
                    <Text style={styles.value}>${target}</Text>

                </View>
                
                <Text style={styles.progress}>{parseInt(100*actual / target)}%</Text>

            </View>

        </View>

    );

}
