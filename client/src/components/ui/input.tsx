import colors from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { hp, wp } from "@/utils/common";
import React, { forwardRef } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

interface InputProps extends TextInputProps {
  ContainerStyle?: StyleProp<ViewStyle>;
  LabelStyle?: StyleProp<TextStyle>;
  TextInputStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
  posticon?: React.ReactNode;
}

const Inputbox = forwardRef<TextInput, InputProps>((props, ref) => {
  const { ContainerStyle, TextInputStyle, posticon, icon, ...TextInputProps } =
    props;

  return (
    <View style={[styles.container, ContainerStyle]}>
      {icon}
      <TextInput
        ref={ref}
        style={[styles.TextInputStyle, TextInputStyle]}
        placeholderTextColor="black"
        {...TextInputProps} // Spread remaining TextInput props
      />
      {posticon}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.palepurple,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: wp(4),
    backgroundColor: colors.secondary,
  },
  TextInputStyle: {
    flex: 1,
    fontSize: hp(2.0),
    paddingLeft: wp(3.5),
    color: "black",
    fontFamily: Fonts.poppins,
  },
});

export default Inputbox;
