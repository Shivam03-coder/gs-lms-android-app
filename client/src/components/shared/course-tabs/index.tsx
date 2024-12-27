import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "@/constants/colors";
import { Paragraph } from "@/components/ui/texts";
import { hp, wp } from "@/utils/common";
import About from "./about";
import Lessons from "./lessons";
import Reviews from "./reviews";
import { Fonts } from "@/constants/fonts";

const CourseTabs = () => {
  const [active, setActive] = useState<string>("About");

  const renderTab = (title: string) => {
    return (
      <TouchableOpacity
        onPress={() => setActive(title)}
        style={[styles.tabButton, active === title && styles.activeTabButton]}
      >
        <Paragraph
          textstyle={[styles.tabText, active === title && styles.activeTabText]}
          title={title}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        gap: hp(2),
      }}
    >
      <View style={styles.container}>
        {renderTab("About")}
        {renderTab("Lessons")}
        {renderTab("Reviews")}
      </View>
      {active === "About" && <About />}
      {active === "Lessons" && <Lessons />}
      {active === "Reviews" && <Reviews />}
    </View>
  );
};

export default CourseTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tabButton: {
    backgroundColor: colors.dark,
    borderRadius: wp(6),
    flex: 1,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: colors.secondary,
  },
  tabText: {
    color: colors.secondary,
    textAlign: "center",
    width: "100%",
    paddingVertical: wp(2),
  },
  activeTabText: {
    color: colors.primary,
  },
});
