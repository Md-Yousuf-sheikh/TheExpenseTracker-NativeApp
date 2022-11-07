import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./src/screens/ManageExpenses";
import RecentExpenses from "./src/screens/RecentExpenses";
import AllExpenses from "./src/screens/AllExpenses";
import COLORS from "./src/themes/themes";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./src/components/ExpensesOutput/UI/IconButton";
import ExpensesContextProvider from "./src/Context/expensesContext";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        // headerShown: false,
        headerStyle: {
          backgroundColor: COLORS.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: COLORS.primary500,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#cbcbcb",

        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"add"}
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpenses");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <ExpensesContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: COLORS.primary500,
            },
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              headerShown: true,
              title: "Manage Expenses",
              // presentation: "containedTransparentModal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}
