import ScreenTopBarWrapper from "@/components/shared/providers/screen-top-bar-wrapper";
import { Heading1 } from "@/components/ui/texts";
import colors from "@/constants/colors";
import React from "react";

const UserProfileTabScreen = () => {
  return (
    <ScreenTopBarWrapper>
      <Heading1
        title="UserProfileTabScreen"
        textstyle={{ color: colors.paleblue }}
      />
    </ScreenTopBarWrapper>
  );
};

export default UserProfileTabScreen;
