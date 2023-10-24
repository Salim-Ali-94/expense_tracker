import { Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { styles } from "./styles";


export default function GlassCard({ balance, expense, profit }) {

  return (

    <View style={styles.card}>

        <BlurView style={styles.blur}
                  blurType="light"
                  blurAmount={5}>

            <View style={styles.box}>

                <View>

                    <Text style={styles.heading}>My balance</Text>

                    <Text style={styles.bigText}
                          numberOfLines={1}
                          ellipsizeMode="tail">${balance}</Text>

                </View>

                <View style={styles.row}>

                    <View style={styles.expenseBox}>

                        <Text style={styles.heading}>Spend</Text>

                        <Text style={styles.valueText}
                              numberOfLines={1}
                              ellipsizeMode="tail">+${expense}</Text>

                    </View>

                    <View style={styles.profitBox}>

                        <Text style={styles.heading}>Profit</Text>

                        <Text style={styles.valueText}
                              numberOfLines={1}
                              ellipsizeMode="tail">-${profit}</Text>

                    </View>

                </View>

            </View>

        </BlurView>

    </View>

  );

}