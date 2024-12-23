import { useUserInfoQuery } from "@/store/api/protected-route";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [UserId, setUserId] = useState<string>("");
  const [isAuth, setisAuth] = useState<boolean>(false);
  const [Loading, setLoading] = useState<boolean>(true); // Default to true since we're loading initially
  const { data: Userinfo, isLoading: userInfoLoading } = useUserInfoQuery(); // Destructure hook at the top

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("accessToken");

        if (userId && token) {
          // Only check authentication if `Userinfo` is available
          if (Userinfo?.data?.id === userId) {
            setUserId(userId);
            setisAuth(true);
          } else {
            setisAuth(false);
          }
        } else {
          setisAuth(false); // If no userId or token, consider not authenticated
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setisAuth(false); // Default to false on error
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or error
      }
    };

    // Run checkAuth only if `Userinfo` is loaded
    if (!userInfoLoading && Userinfo) {
      checkAuth();
    }
  }, [Userinfo, userInfoLoading]); // Re-run the effect when `Userinfo` or `userInfoLoading` changes

  // Combine external loading and internal `Loading` state
  const isOverallLoading = Loading || userInfoLoading;

  console.log("Userinfo:", Userinfo);
  console.log(UserId);
  console.log(isAuth);


  return { UserId, isAuth, Loading: isOverallLoading };
};

export default useAuth;
