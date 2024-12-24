import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Button from "@/components/ui/button";
import { wp, hp } from "@/utils/common";
import colors from "@/constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Fonts } from "@/constants/fonts";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
        activeOpacity={0.7}
      >
        <FontAwesome name="search" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp(2),
    columnGap: wp(3),
  },
  input: {
    flex: 1,
    height: hp(5),
    paddingHorizontal: wp(3),
    backgroundColor: colors.secondary,
    borderRadius: wp(1),
    color: colors.primary,
    fontFamily:Fonts.inter,
    fontSize:hp(1.9)
  },
  button: {
    height: "auto",
    padding: wp(3.4),
    backgroundColor: colors.palepurple,
    borderRadius: wp(1),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp(2),
  },
});
