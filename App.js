import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Analytics from "./screens/Analytics";
import * as constants from "./constants";


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Analytics" component={Analytics} options={{ headerTintColor: "#ffffff", headerStyle: { backgroundColor: constants.lunar }, headerTitle: "", headerShadowVisible: false }} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}