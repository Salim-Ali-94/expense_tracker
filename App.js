import { SafeAreaView, View, StatusBar, ScrollView } from "react-native";
import * as constants from "./constants";
import GlassCard from "./components/GlassCard";
import GradientCard from "./components/GradientCard";
import DonutChart from "./components/DonutChart";
import CategoryCard from "./components/CategoryCard";
import { styles } from "./styles";


export default function App() {

  return (

    <SafeAreaView style = {{ backgroundColor: constants.lunar, flex: 1 }}>

      <ScrollView>

        <StatusBar backgroundColor={constants.lunar}
                   barStyle="light-content" />

        <View style={styles.carousel}>

          <CategoryCard icon={constants.icons.analytics} />
          <CategoryCard icon={constants.icons.transactions} />
          {/* <CategoryCard icon={constants.icons.internet} /> */}
          <CategoryCard icon={constants.icons.electricity} />

        </View>

        <View style={styles.cardSection}>

          <GlassCard balance="26,129"
                     expense="2,800"
                     profit="687" />

          <GradientCard />

        </View>

        <DonutChart data={[40, 90, 27]} />

      </ScrollView>

    </SafeAreaView>

  );

}