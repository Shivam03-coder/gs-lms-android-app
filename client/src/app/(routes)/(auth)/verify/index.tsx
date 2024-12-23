import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import Button from "@/components/ui/button";
import { Heading6, Paragraph } from "@/components/ui/texts";
import colors from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { useVerifyUserMutation } from "@/store/api/auth-endpoint";
import { Styles } from "@/styles/global";
import { hp, wp } from "@/utils/common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createRef, useRef, useState } from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import { useToast } from "react-native-toast-notifications";

const Verify = () => {
  const [Code, setCode] = useState<string[]>(new Array(4).fill(""));
  const inputs = useRef([...Array(4)].map(() => createRef<TextInput>()));
  const [SendAgain, setSendAgain] = useState<boolean>(false);
  const toast = useToast();
  const [VerifyUser, { isLoading }] = useVerifyUserMutation();

  const handleInput = (text: string, index: number) => {
    const newCode = [...Code];
    newCode[index] = text;
    setCode(newCode);

    // Focus next input
    if (text && index < 3) {
      inputs.current[index + 1].current?.focus();
    }

    // Focus previous input on deletion
    if (text === "" && index > 0) {
      inputs.current[index - 1].current?.focus();
    }
  };

  const handleOTPverify = async () => {
    try {
      const otp = Code.join("");
      const email = await AsyncStorage.getItem("email");

      if (!otp.trim() || !email?.trim()) {
        toast.show("OTP and Email are required", { type: "danger" });
        return;
      }

      const { data } = await VerifyUser({ email, otp });
      console.log("🚀 ~ handleOTPverify ~ data:", data)

      if (data?.code === 200) {
        toast.show("Email verified successfully", { type: "success" });
        setCode([]);
      } else {
        toast.show("OTP verification failed. Please try again.", {
          type: "danger",
        });
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.show("Please try again later.", { type: "danger" });
    }
  };

  return (
    <ScreenWrapper>
      <View style={[Styles.container, styles.wrapper]}>
        <Heading6
          fontFamily={Fonts.poppins}
          textstyle={styles.title}
          title="Verification Code"
        />
        <Paragraph
          fontFamily={Fonts.poppins}
          textstyle={styles.heading}
          title={
            SendAgain
              ? "New Otp sent agin Please Check !"
              : "We have sent an OTP to your registered email. Please verify it."
          }
        />
        <View style={styles.inputContainer}>
          {Code.map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              maxLength={1}
              keyboardType="phone-pad"
              onChangeText={(text) => handleInput(text, index)}
              ref={inputs.current[index]}
              cursorColor={colors.primary}
            />
          ))}
        </View>

        <Button
          onPress={handleOTPverify}
          title="Submit"
          textStyle={styles.btntext}
          width={73}
          loading={isLoading}
        />
        <Pressable onPress={() => setSendAgain(true)}>
          <Paragraph
            textstyle={styles.heading}
            title="Send Verification Code again?"
          />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 1,
    rowGap: hp(5),
  },
  title: {
    color: colors.paleblue,
  },
  heading: {
    color: colors.secondary,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    columnGap: wp(3),
  },
  input: {
    backgroundColor: colors.paleblue,
    fontSize: hp(2.7),
    width: wp(12),
    height: wp(12),
    borderRadius: 4,
    textAlign: "center",
    fontFamily: Fonts.poppins,
    textAlignVertical: "center",
    elevation: 5,
    fontWeight: "900",
  },
  btntext: {
    fontSize: hp(2),
  },
});

export default Verify;
