import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth.styles.ts";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{ color: "white", flex: 1, justifyContent: "center" }}>
          signout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
