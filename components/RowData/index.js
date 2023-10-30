import { View, Text } from "react-native";
import ProgressIndicator from "../ProgressIndicator";
import * as constants from "../../constants";
import { styles } from "./styles";


export default function RowData() {

    return (

        <View style={styles.row}>

            <ProgressIndicator tint={constants.purple}
                               percent={0.6}
                               icon={constants.icons.travel} />


            <View style={styles.dataSection}>

                <View style={styles.category}>

                    <Text style={styles.heading}>Travel</Text>
                    <Text style={styles.value}>$860 / $950</Text>

                </View>
                
                <View style={styles.percentage}>

                    <Text style={styles.progress}>94%</Text>

                </View>

            </View>

        </View>

    );

}
