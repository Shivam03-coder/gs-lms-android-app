import { dark } from "@clerk/themes";
export const clerkConfig = {
  appearance: {
    baseTheme: dark,
    layout: {
      socialButtonsPlacement: "bottom",
      socialButtonsVariant: "iconButton",
    },
  },
  afterSignOutUrl: "/",
  termsPageUrl: "https://clerk.com/terms",
};
