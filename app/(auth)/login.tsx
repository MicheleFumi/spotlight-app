import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleSSOSignIn = async (provider) => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: `oauth_${provider}`,
      });

      if (setActive && createdSessionId) {
        await setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error(`OAuth ${provider} error:`, error);
    }
  };

  return (
    <View style={styles.container}>
      {/* brand section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="infinite-sharp" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>SpaceCAKE</Text>
        <Text style={styles.tagline}>Embrace FOMO</Text>
      </View>
      <Image
        source={require("../../assets/images/login-logo.png")}
        style={styles.illustration}
        resizeMode="cover"
      />
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => handleSSOSignIn("google")}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => handleSSOSignIn("apple")}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-apple" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with iCloud</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
