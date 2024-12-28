import Pie from "@/components/shared/charts/pie-chart";
import ProfileCard from "@/components/shared/profile";
import ScreenTopBarWrapper from "@/components/shared/providers/screen-top-bar-wrapper";
import Button from "@/components/ui/button";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from "react-native-toast-notifications";
import { router } from "expo-router";

const UserProfileTabScreen = () => {
  const toast = useToast();
  const [Loading, setLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    try {
      setLoading(true);
      await Promise.all([
        await AsyncStorage.removeItem("accessToken"),
        await AsyncStorage.removeItem("refreshToken"),
      ]);
      setLoading(false);
      toast.show("🎉 User logout successful! 🎉", { type: "success" });
      router.push("/(routes)/(auth)/login");
    } catch (error) {
      console.error("Error removing tokens from AsyncStorage:", error);
    }
  };

  return (
    <ScreenTopBarWrapper>
      <ScrollView
        style={{
          flexGrow: 1,
          gap: 12,
        }}
      >
        <ProfileCard />
        <Pie />
        <Button loading={Loading} onPress={handleLogout} title="LOGOUT" />
      </ScrollView>
    </ScreenTopBarWrapper>
  );
};

export default UserProfileTabScreen;
