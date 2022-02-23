import { View, Text, FlatList } from "react-native";
import axios from "axios";

const HomeScreen = () => {
  const fetchData = () => {
    const response = axios.get(
      "https://express-airbnb-api.herokuapp.com/rooms"
    );
    console.log(response.data);
  };

  return (
    <View>
      <Text>Home </Text>
      <FlatList
        data={response.data}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};
export default HomeScreen;
