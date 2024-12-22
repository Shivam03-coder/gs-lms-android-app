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
import { AntDesign, Feather, Foundation, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/ui/button";
import colors from "@/constants/colors";
import { router } from "expo-router";

const LoginScreen = () => {
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState<boolean>(false);

  // FORM SUBMISSION
  const handelForm = () => {
    setLoading(true);
    console.log(Email);
    console.log(Password);
    setPassword("");
    setEmail("");
    setLoading(false);
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
              title="Welcome Back !"
              fontFamily={Fonts.poppins}
            />
            {/* Lottie Animation */}
            <Lottie src={require("@/assets/lottie-json/login.json")} />

            <View style={LoginScreenstyles.formContainer}>
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
              {/* Forgot Password Link */}
              <View style={LoginScreenstyles.forgotPasswordContainer}>
                <Paragraph
                  title="forgot password ?"
                  textstyle={LoginScreenstyles.forgotPasswordText}
                />
              </View>

              {/* Login Button */}
              <Button
                loading={Loading}
                onPress={handelForm}
                width={90}
                title="Login"
              />

              {/* OAuth Container */}
              <View style={LoginScreenstyles.oauthconatiner}>
                {/* Google Auth Button */}
                <TouchableOpacity
                  style={LoginScreenstyles.auth}
                  onPress={() => console.log("first")}
                >
                  <AntDesign
                    style={{ textAlign: "center" }}
                    name="google"
                    size={34}
                    color="black"
                  />
                </TouchableOpacity>
                {/* GitHub Auth Button */}
                <TouchableOpacity
                  style={LoginScreenstyles.auth}
                  onPress={() => console.log("first")}
                >
                  <AntDesign
                    style={{ textAlign: "center" }}
                    name="github"
                    size={34}
                    color="black"
                  />
                </TouchableOpacity>
              </View>

              {/* Sign Up Section */}
              <View style={LoginScreenstyles.signUpContainer}>
                <Paragraph
                  title="Donot have an account ?"
                  textstyle={LoginScreenstyles.signUpText}
                />
                <TouchableOpacity
                  // @ts-ignore
                  onPress={() => router.push("/(routes)/(auth)/signup")}
                >
                  <Paragraph
                    textstyle={LoginScreenstyles.signUpButton}
                    title=" SignUp"
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
    marginBottom: -23,
  },
  formContainer: {
    flex: 1,
    width: wp(90),
    alignItems: "center",
    rowGap: hp(3),
    marginTop: -42,
  },
  forgotPasswordContainer: {
    width: "100%",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: colors.link,
    textDecorationLine: "underline",
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
  oauthconatiner: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(2),
  },
  auth: {
    flex: 1,
    backgroundColor: colors.palepurple,
    borderRadius: 12,
    paddingVertical: 8,
  },
});

export default LoginScreen;