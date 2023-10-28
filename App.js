import { SafeAreaView, Image, Text, View, StatusBar, ScrollView } from "react-native";
import * as constants from "./constants";
import GlassCard from "./components/GlassCard";
import GradientCard from "./components/GradientCard";
import DonutChart from "./components/DonutChart";
import CategoryCard from "./components/CategoryCard";
import { styles } from "./styles";


export default function App() {

  return (

    <SafeAreaView style = {{ backgroundColor: constants.lunar, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <StatusBar backgroundColor={constants.lunar}
                   barStyle="light-content" />

        <View style={styles.header}>

          <View style={styles.row}>

            <Text style={styles.greeting}>Hello, Salim</Text>

            <View style={styles.profile}>

              <Image source={require("./assets/icons/profile.jpg")} style={styles.img} />

            </View>

          </View>

        </View>

        <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>

          <View style={styles.carousel}>

            <CategoryCard icon={constants.icons.analytics} />
            <CategoryCard icon={constants.icons.transactions} />
            <CategoryCard icon={constants.icons.internet} />
            <CategoryCard icon={constants.icons.electricity} />

          </View>

        </ScrollView>

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