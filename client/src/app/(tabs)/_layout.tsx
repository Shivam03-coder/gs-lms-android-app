import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home/index" />
      <Tabs.Screen name="search/index" />
      <Tabs.Screen name="settings/index" />
      <Tabs.Screen name="userprofile/index" />
    </Tabs>
  );
}
