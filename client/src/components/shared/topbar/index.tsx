import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { hp, wp } from "@/utils/common";
import colors from "@/constants/colors";
import { Paragraph } from "@/components/ui/texts";
import useAuth from "@/hooks/useAuth";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const TopBar = () => {
  const { Userinfo } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Entypo name="user" size={44} color={colors.palepurple} />
        <View style={styles.textContainer}>
          <Paragraph textstyle={styles.text} title="Hii" />
          <Paragraph
            textstyle={styles.text}
            title={Userinfo ? Userinfo.data.name : "Sepolia"}
          />
        </View>
      </View>
      <FontAwesome name="dropbox" size={44} color={colors.palepurple} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    position: "relative",
    top: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    justifyContent: "space-between",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
  },
  textContainer: {
    height: wp(13),
  },
  text: {
    color: colors.palepurple,
  },
});

export default TopBar;
