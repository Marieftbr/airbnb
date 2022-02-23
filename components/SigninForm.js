import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const toto = () => {
    try {
      console.log(email, password);
      const response = axios.post(
        "https://express-airbnb-api.herokuapp.com/user/log_in",
        {
          email,
          password,
        }
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toto(event);
    alert("You're connected!");
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <Image />
        <Text style={styles.titleTextColor}>Sign in</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          passwordRules="true"
          value={password}
          secureTextEntry={true}
        ></TextInput>
        <TouchableHighlight style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.textColor}>Sign in</Text>
        </TouchableHighlight>
        <Text
          style={{ color: "#727272", marginLeft: 130, marginTop: 20 }}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          No account? Register
        </Text>
      </View>
    </ScrollView>
  );
};
export default SigninForm;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#F85358",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    textAlign: "center",
    width: 150,
    marginTop: 80,
    marginLeft: 120,
    marginRight: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  pinkText: {
    color: "pink",
  },
  titleTextColor: {
    color: "#727272",
    fontWeight: "700",
    fontSize: 28,
    textAlign: "center",
    marginTop: 90,
    marginBottom: 80,
  },
  textColor: {
    color: "#727272",
  },

  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#F85358",
    paddingBottom: 8,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  inputTextareaStyle: {
    borderWidth: 1,
    borderColor: "#F85358",
    paddingBottom: 8,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    minHeight: 100,
  },
});
