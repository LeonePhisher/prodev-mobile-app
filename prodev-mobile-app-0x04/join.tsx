import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Join us today</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />

        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </Pressable>
      </View>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <Pressable style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Sign up with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account?</Text>
        <Pressable onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}> Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}
