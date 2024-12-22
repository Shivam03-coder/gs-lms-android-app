import {
  View,
  Text,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
// @ts-ignore
import colors from "@/constants/colors";
import { hp, wp } from "@/utils/common";
import { Fonts } from "@/constants/fonts";

type ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: () => void;
  width?: number; // Width in percentage (0-100)
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  textStyle,
  buttonStyle,
  onPress,
  title,
  width,
  loading,
}) => {
  const buttonWidth = width ? wp(width) : wp(90); // Default to 90% width if not provided

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, { width: buttonWidth }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>
        {loading ? <ActivityIndicator size="large" color="#000" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.palepurple,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.primary,
    fontSize: hp(1.9),
    fontWeight: "700",
    fontFamily: Fonts.nunito,
  },
});

export default Button;
