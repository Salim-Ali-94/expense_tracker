import { SafeAreaView, Image, Text, View, StatusBar, ScrollView } from "react-native";
import * as constants from "./constants";
import GlassCard from "./components/GlassCard";
import GradientCard from "./components/GradientCard";
import CategoryCard from "./components/CategoryCard";
import RowData from "./components/RowData";
import { styles } from "./styles";


export default function App() {

  const data = [{ category: "Vacation", target: 1000, amount: 800, colour: constants.purple, icon: constants.icons.travel },
                { category: "Home", target: 1000000, amount: 567890, colour: constants.green, icon: constants.icons.home },
                { category: "Medical", target: 54321, amount: 23456, colour: constants.ocean, icon: constants.icons.health },
                { category: "Pension", target: 500000, amount: 350000, colour: constants.orange, icon: constants.icons.retirement },
                { category: "Emergency", target: 100000, amount: 50000, colour: constants.pink, icon: constants.icons.emergency },
                { category: "Vehicle", target: 654321, amount: 123456, colour: constants.yellow, icon: constants.icons.vehicle },]

  return (

    <SafeAreaView style = {{ backgroundColor: constants.lunar, flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <StatusBar backgroundColor={constants.lunar}
                   barStyle="light-content" />

        <View style={styles.header}>

          <View style={styles.row}>

            <View style={styles.greetingContainer}>

              <Text style={styles.greeting}>Hello, Salim</Text>

            </View>

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
            <CategoryCard icon={constants.icons.electricity} />
            <CategoryCard icon={constants.icons.internet} />

          </View>

        </ScrollView>

        <View style={styles.cardSection}>

          <GlassCard balance="26,129"
                     expense="2,800"
                     profit="687" />

          <GradientCard />

        </View>

        <View style={styles.objectivesSection}>

          <View style={styles.headingContainer}>

            <Text style={styles.heading}>Funds</Text>

          </View>

        </View>

        <View style={{width: "100%", alignItems: "center"}}>

          { data.map((item, index) => <RowData category={item.category}
                                               key={index}
                                               target={item.target}
                                               actual={item.amount}
                                               gap={(index === data.langth - 1) ? 0 : 20}
                                               tint={item.colour}
                                               icon={item.icon} />) }

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}