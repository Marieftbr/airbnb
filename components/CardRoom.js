import { Image, View } from "react-native";
import { ImageBackground } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const CardRoom = (props) => {
  return (
    <View>
      <View>
        <ImageBackground source={props.image} resizeMode="contain">
          <Text>{props.price}</Text>
        </ImageBackground>
      </View>
      <View>
        <Text></Text>
        <Image source={props.user} />
      </View>
    </View>
  );
};
