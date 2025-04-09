import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello</Text>
      <TouchableOpacity onPress={() => alert("you touched")}>
        <Text>press me</Text>
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{
          width: 100,
          height: 100,
          marginTop: 25,
        }}
      />
      <Link href={"/notification"}> visit notification screen </Link>
    </View>
  );
}
