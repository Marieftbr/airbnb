import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async (token) => {
    if (token) {
      await AsyncStorage.setItem("userToken", token);
    } else {
      await AsyncStorage.removeItem("userToken");
    }
    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading === true) {
    // We haven't finished checking for the token yet
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {userToken === null ? (
          // No token found, user isn't signed in
          <>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              tabBarColor={"#F85358"}
              options={{
                tabBarIcon: () => {
                  <Icon name="ios-home" color={"red"} size={25} />;
                },
              }}
            />
            <Tab.Screen name="SignUp">
              {() => <SignupScreen setToken={setToken} />}
            </Tab.Screen>
            <Tab.Screen name="SignIn">
              {() => <SigninScreen setToken={setToken} />}
            </Tab.Screen>
          </>
        ) : (
          <>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              tabBarColor={"#F85358"}
              options={{
                tabBarIcon: () => {
                  <Icon name="ios-home" color={"red"} size={25} />;
                },
              }}
            />
            {/* <Tab.Screen name="Signup" component={SignupScreen} />
            <Tab.Screen name="Signin" component={SigninScreen} /> */}
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
