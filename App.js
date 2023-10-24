import { SafeAreaView, View, StatusBar, ScrollView } from "react-native";
import * as constants from "./constants";
import GlassCard from "./components/GlassCard";
import GradientCard from "./components/GradientCard";
import { styles } from "./styles";


export default function App() {

  return (

    <SafeAreaView style = {{ backgroundColor: constants.dark, flex: 1 }}>

      <ScrollView>

        <StatusBar backgroundColor={constants.dark}
                   barStyle="light-content" />

        <View style={styles.cardSection}>

          <GlassCard balance="26,129"
                     expense="2,800"
                     profit="687" />

          <GradientCard />

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}