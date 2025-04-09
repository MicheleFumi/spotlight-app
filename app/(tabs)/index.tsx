import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles/auth.styles.js";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>signout</Text>
      </TouchableOpacity>
    </View>
  );
}
