import { Image, View, Text, Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";

const CardRoom = (props) => {
  //   console.log(props.room);
  return (
    <View>
      <View>
        <ImageBackground
          source={{ uri: props.room.photos[0].url }}
          style={{ width: Dimensions.get("window").width, height: 200 }}
          resizeMode="contain"
        >
          <Text>{props.room.price}</Text>
        </ImageBackground>
      </View>
      <View>
        <Text>{props.room.title}</Text>
        <FlatList
          data={props.room.user.account.photo.url}
          keyExtractor={(item) => item.picture_id}
          renderItem={({ item }) => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={{ uri: item.url }}
                key={item.picture_id}
              ></Image>
            );
          }}
        />
        {/* <Image source={{ uri: props.room.user.account.photo.url }} /> */}
      </View>
    </View>
  );
};
export default CardRoom;
