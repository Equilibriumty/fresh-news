import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    fonts: {
      heading: "Inter",
      text: "Inter",
    },
  },
  { config }
);

export default theme;
