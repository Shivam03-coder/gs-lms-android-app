import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import colors from "@/constants/colors";
import { hp, wp } from "@/utils/common";
import Modal from "react-native-modal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsReviewSheetOpen } from "@/store/state";
import AddTextComponent from "./add-comment";

const WriteReview = () => {
  const dispatch = useAppDispatch();
  const isModelOpen = useAppSelector((state) => state.global.isReviewSheetOpen);

  const toggleModal = () => {
    dispatch(setIsReviewSheetOpen());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.writeReviewButton}>
        <EvilIcons name="pencil" size={24} color="white" />
        <Text style={styles.buttonText}>Write a comment</Text>
      </TouchableOpacity>

      <Modal
        style={{
          margin: 0,
        }}
        isVisible={isModelOpen}
        animationIn={"slideInDown"}
        animationInTiming={5}
      >
        <View
          style={{
            flex: 1,
            position: "absolute",
            bottom: -3,
            backgroundColor: colors.dark,
            height: hp(39),
            width: "100%",
            borderRadius: 12,
          }}
        >
          <AddTextComponent />
        </View>
      </Modal>
    </View>
  );
};

export default WriteReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: wp(4),
  },
  writeReviewButton: {
    backgroundColor: colors.dark,
    maxWidth: wp(52),
    borderRadius: wp(2),
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: wp(2.5),
    paddingHorizontal: wp(4),
    elevation: 5,
  },
  buttonText: {
    marginLeft: wp(2),
    fontSize: wp(4),
    color: "white",
    fontWeight: "500",
  },
});
