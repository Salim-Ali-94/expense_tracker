import { Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { styles } from "./styles";
// import GradientCard from "../GradientCard";


export default function GlassCard({ balance, expense, profit }) {

  return (

    <View style={styles.card}>

        <BlurView style={styles.blur}
                  blurType="light"
                  blurAmount={5}>

            <View style={styles.box}>

                <View>

                    <Text style={styles.heading}>My balance</Text>
                    <Text style={styles.bigText}>${balance}</Text>

                </View>

                <View style={styles.row}>

                    <View style={styles.expenseBox}>

                        <Text style={styles.heading}>Spend</Text>
                        <Text style={styles.valueText}>+${expense}</Text>

                    </View>

                    <View style={styles.profitBox}>

                        <Text style={styles.heading}>Profit</Text>
                        <Text style={styles.valueText}>-${profit}</Text>

                    </View>

                </View>

            </View>

        </BlurView>

        {/* <GradientCard /> */}

    </View>

  );

}