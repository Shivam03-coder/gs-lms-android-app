import { Paragraph } from "@/components/ui/texts";
import colors from "@/constants/colors";
import { setIsReviewSheetOpen } from "@/store/state";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { hp, wp } from "@/utils/common";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import ButtonBox from "@/components/ui/button";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "@/constants/fonts";

const AddTextComponent = () => {
  const [inputText, setInputText] = useState("");
  const [Text, setText] = useState<string>("");
  const dispatch = useAppDispatch();
  const isModelOpen = useAppSelector((state) => state.global.isReviewSheetOpen);

  const toggleModal = () => {
    dispatch(setIsReviewSheetOpen());
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: wp(3),
            padding: 2,
          }}
        >
          <Paragraph
            textstyle={{
              color: colors.secondary,
            }}
            title="Write a comment"
          />
          <EvilIcons name="pencil" size={24} color="white" />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: wp(3),
            padding: 2,
          }}
          onPress={toggleModal}
        >
          <AntDesign name="closecircle" size={34} color={colors.palepurple} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder="Enter text here"
          placeholderTextColor="#000000"
          value={Text}
          style={styles.input}
          onChangeText={setText}
          multiline
        />
        <ButtonBox onPress={toggleModal} title="SUBMIT" />
      </View>
    </View>
  );
};

export default AddTextComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.dark,
    gap: wp(5),
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    fontSize: hp(2),
    backgroundColor: "#fff",
    fontFamily: Fonts.inter,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  textListContainer: {
    marginTop: 20,
    width: "90%",
  },
  textItem: {
    fontSize: 16,
    color: "#333",
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
});
