import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import Lottie from "@/components/shared/lotties";
import { Heading4, Paragraph } from "@/components/ui/texts";
import { hp, wp } from "@/utils/common";
import { Fonts } from "@/constants/fonts";
import Inputbox from "@/components/ui/input";
import { Entypo, Feather, Foundation, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/ui/button";
import colors from "@/constants/colors";
import { router } from "expo-router";
import { useSignupuserMutation } from "@/store/api/auth-endpoint";
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = () => {
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [SignUpUser, { isLoading }] = useSignupuserMutation();
  const toast = useToast();

  // FORM SUBMISSION
  const handelForm = async () => {
    try {
      if (!Email.trim() || !Password.trim() || !Name.trim()) {
        toast.show("All fields are required.", { type: "danger" });
        return;
      }
      const res = await SignUpUser({
        emailAddress: Email.trim(),
        name: Name.trim(),
        password: Password.trim(),
      }).unwrap();

      // Handle success response
      if (res.code === 200 && res.data) {
        // Store res.is in AsyncStorage
        await AsyncStorage.setItem("userId", JSON.stringify(res.data.id));
        toast.show("USer Signup successful!", { type: "success" });
        setName("");
        setName("");
        setPassword("");
      } else {
        toast.show(res.message || "Something went wrong.", { type: "danger" });
      }
    } catch (error) {
      console.log("🚀 ~ handelForm ~ error:", error);
      toast.show("An unexpected error occurred.", { type: "danger" });
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined} // Adjust behavior for iOS
      >
        <ScrollView
          contentContainerStyle={LoginScreenstyles.scrollViewContainer}
        >
          <View style={LoginScreenstyles.container}>
            {/* Heading */}
            <Heading4
              textstyle={[LoginScreenstyles.headingText]}
              title="Let's Get Started!"
              fontFamily={Fonts.poppins}
            />

            {/* Lottie Animation */}
            <Lottie src={require("@/assets/lottie-json/signup.json")} />

            <View style={LoginScreenstyles.formContainer}>
              {/* Name Input */}
              <Inputbox
                icon={<Entypo name="user" size={24} color="black" />}
                placeholder="Enter your name"
                onChangeText={setName}
                value={Name}
              />
              {/* Email Input */}
              <Inputbox
                icon={<MaterialIcons name="email" size={24} color="black" />}
                placeholder="Enter your email"
                onChangeText={setEmail}
                value={Email}
              />
              {/* Password Input */}
              <Inputbox
                icon={<Foundation name="key" size={24} color="black" />}
                placeholder="Enter your password"
                secureTextEntry={!ShowPassword} // Toggling password visibility
                onChangeText={setPassword}
                value={Password}
                posticon={
                  <TouchableOpacity
                    onPress={() => setShowPassword(!ShowPassword)}
                  >
                    <Feather
                      name={ShowPassword ? "eye" : "eye-off"}
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                }
              />

              {/* Sign Up Button */}
              <Button
                loading={isLoading}
                onPress={handelForm}
                width={90}
                title="Sign-Up"
              />

              {/* Sign Up Section */}
              <View style={LoginScreenstyles.signUpContainer}>
                <Paragraph
                  title="Already have an account?"
                  textstyle={LoginScreenstyles.signUpText}
                />
                <TouchableOpacity
                  onPress={() => router.push("/(routes)/(auth)/login")}
                >
                  <Paragraph
                    textstyle={LoginScreenstyles.signUpButton}
                    title="Sign-in"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const LoginScreenstyles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: hp(3),
  },
  container: {
    flex: 1,
    marginTop: hp(1),
    alignItems: "center",
  },
  headingText: {
    color: colors.secondary,
    textAlign: "center",
    marginBottom: -13,
    marginTop: 12,
  },
  formContainer: {
    flex: 1,
    width: wp(90),
    alignItems: "center",
    rowGap: hp(2.5),
    marginTop: -42,
  },
  signUpContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textAlign: "center",
    color: colors.secondary,
  },
  signUpButton: {
    color: colors.yellow,
  },
});

export default SignUpScreen;
