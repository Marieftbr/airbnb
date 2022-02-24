import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { useState } from "react";
import CardRoom from "../components/CardRoom";

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://express-airbnb-api.herokuapp.com/rooms"
    );
    setRooms(response.data);
  };
  fetchData();

  return (
    <View>
      <Text>Home </Text>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <CardRoom key={item._id} room={item} />;
        }}
      />
    </View>
  );
};
export default HomeScreen;
