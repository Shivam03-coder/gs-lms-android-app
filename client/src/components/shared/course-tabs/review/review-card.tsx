import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { hp, wp } from "@/utils/common";
import colors from "@/constants/colors";
import { Heading5 } from "@/components/ui/texts";
import useAuth from "@/hooks/useAuth";
import { Fonts } from "@/constants/fonts";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

// Card Component
const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

// Reviews Component
const ReviewCards = () => {
  const { Userinfo } = useAuth();
  const userInitial = Userinfo?.data.name.charAt(0).toUpperCase() || "X";

  return (
    <Card>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Heading5 textstyle={styles.avatarText} title={userInitial} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.comment}>
          Here’s how you can write the Card component in TypeScript with proper
          type annotations to ensure type safety and clarity:
        </Text>
        <Text style={styles.timestamp}>15 hrs ago</Text>
      </View>
    </Card>
  );
};

export default ReviewCards;

// Styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.dark,
    minHeight: hp(9),
    borderRadius: wp(3),
    elevation: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: wp(2.5),
    paddingVertical: wp(2),
    gap: wp(3),
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25, // Updated from "50%" to numeric value
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    textAlign: "center",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    padding: wp(2),
    justifyContent: "space-between",
  },
  comment: {
    fontSize: hp(1.8),
    color: colors.secondary,
  },
  timestamp: {
    textAlign: "right",
    fontFamily: Fonts.nunito,
    fontSize: hp(1.8),
    color: colors.palepurple,
    fontWeight: "700",
  },
});
