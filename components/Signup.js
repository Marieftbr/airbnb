import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");

  const pushData = async () => {
    try {
      const response = await axios.post(
        "https://express-airbnb-api.herokuapp.com/user/sign_up",
        {
          email,
          username: name,
          description,
          password,
        }
      );
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const handleSubmit = (event) => {
    if (email === "") {
      setErrorMessage("Please enter an email");
    } else if (name === "") {
      setErrorMessage("Please enter your name");
    } else if (description === "") {
      setErrorMessage("Please enter a description");
    } else if (password === "") {
      if (password != confirmPassword) {
        setErrorMessage("Passwords must be the same");
      } else {
        setErrorMessage("ok");
      }
    } else {
      event.preventDefault();
      pushData(event);

      alert("You're account is created !");
      navigation.navigate("Home");
    }
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <Image />
        <Text style={styles.titleTextColor}>Sign Up</Text>
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
          placeholder="username"
          onChangeText={(text) => setName(text)}
          value={name}
        ></TextInput>
        <TextInput
          style={styles.inputTextareaStyle}
          placeholder="description"
          onChangeText={(text) => setDescription(text)}
          value={description}
          multiline
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="confirm password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
        ></TextInput>
        <Text style={{ color: "red", fontSize: 10, textAlign: "center" }}>
          {errorMessage}
        </Text>
        <TouchableHighlight style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.textColor}>Sign in</Text>
        </TouchableHighlight>
        <Text
          style={{
            color: "#727272",
            marginLeft: 100,
            marginTop: 20,
            marginBottom: 90,
          }}
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          Already have an account? Sign in
        </Text>
      </View>
    </ScrollView>
  );
};
export default SignupForm;

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
