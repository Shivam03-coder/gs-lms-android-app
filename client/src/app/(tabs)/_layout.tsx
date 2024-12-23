import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import colors from "@/constants/colors"; // Ensure this is correctly imported
import { wp } from "@/utils/common"; // Ensure this is correctly imported
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          // Set icon for each tab
          switch (route.name) {
            case "index":
              iconName = "home";
              break;
            case "search/index":
              iconName = "search";
              break;
            case "courses/index":
              iconName = "book";
              break;
            case "userprofile/index":
              iconName = "person";
              break;
            default:
              iconName = "help-circle"; // Fallback icon
          }

          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: focused ? colors.primary : "transparent",
                padding: focused ? 5 : 0,
                position: "absolute",
                bottom: 7,
              }}
            >
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "white" : color}
              />
            </View>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.paleblue,
          marginHorizontal: 10,
          borderRadius: 12,
          position: "absolute",
          bottom: 5,
          left: 10,
          right: 10,
          borderTopWidth: 0,
          shadowOpacity: 0.1,
          shadowRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        },
      })}
    >
      {/* Define the tab screens */}
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search/index" />
      <Tabs.Screen name="courses/index" />
      <Tabs.Screen name="userprofile/index" />
    </Tabs>
  );
}
