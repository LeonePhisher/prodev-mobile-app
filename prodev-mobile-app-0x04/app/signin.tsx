import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />

        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
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
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account?</Text>
        <Pressable onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}> Join</Text>
        </Pressable>
      </View>
    </View>
  );
}
