import { Dimensions } from "react-native";

const { width: DeviceWidth, height: DeviceHeight } = Dimensions.get("window");

export const hp = (percenatge: number) => {
  return (percenatge * DeviceHeight) / 100;
};

export const wp = (percenatge: number) => {
  return (percenatge * DeviceWidth) / 100;
};
