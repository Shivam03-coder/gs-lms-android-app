// hooks / useAuth.ts
import { useUserInfoQuery } from "@/store/api/protected-route";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const useAuth = () => {
  const [UserId, setUserId] = useState<string>("");
  const [isAuth, setisAuth] = useState<boolean>(false);
  const { data: Userinfo, isLoading } = useUserInfoQuery();

  if (!isLoading && Userinfo) {
    (async () => {
      const userId = await AsyncStorage.getItem("userId");
      const token = await AsyncStorage.getItem("accessToken");
      if (Userinfo?.data.id === userId && token) {
        setUserId(userId);
        setisAuth(true);
      }
    })();
  }
  return { UserId, isAuth, isLoading };
};

export default useAuth;
