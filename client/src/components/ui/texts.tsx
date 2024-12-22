import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { hp } from "@/utils/common"; // Assuming hp is defined for responsive height
import { Fonts } from "@/constants/fonts"; // Centralized fonts

// Defining common properties for the text components
type TextPropsWithStyle = {
  textstyle?: StyleProp<TextStyle>;
  title: string;
  fontFamily?: string; // New prop to allow overriding fontFamily
};

// Base text component
const BaseText: React.FC<TextPropsWithStyle & { fontSize: number }> = ({
  textstyle,
  title,
  fontSize,
  fontFamily,
}) => {
  return (
    <Text
      style={[
        textstyle,
        { fontFamily: fontFamily || Fonts.inter, fontSize: hp(fontSize) },
      ]}
    >
      {title}
    </Text>
  );
};

// h1 Component
const Heading1: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={6}
      fontFamily={fontFamily}
    />
  );
};

// h2 Component
const Heading2: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={5}
      fontFamily={fontFamily}
    />
  );
};

// h3 Component
const Heading3: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={4.5}
      fontFamily={fontFamily}
    />
  );
};

// h4 Component
const Heading4: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={4}
      fontFamily={fontFamily}
    />
  );
};

// h5 Component
const Heading5: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={3.5}
      fontFamily={fontFamily}
    />
  );
};

// h6 Component
const Heading6: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={3}
      fontFamily={fontFamily}
    />
  );
};

// Paragraph (p) Component
const Paragraph: React.FC<TextPropsWithStyle> = ({
  textstyle,
  title,
  fontFamily,
}) => {
  return (
    <BaseText
      textstyle={textstyle}
      title={title}
      fontSize={2}
      fontFamily={fontFamily}
    />
  );
};

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
};
