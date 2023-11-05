import { SafeAreaView, ScrollView } from "react-native-safe-area-context";
import DonutChart from "./components/DonutChart";


export default function Analytics() {

    return (

        <SafeAreaView style = {{ backgroundColor: constants.lunar, flex: 1 }}>
    
            <ScrollView showsVerticalScrollIndicator={false}>

                <StatusBar backgroundColor={constants.lunar}
                           barStyle="light-content" />

                <DonutChart data={[40, 90, 27]} />

            </ScrollView>

        </SafeAreaView>

    );

}