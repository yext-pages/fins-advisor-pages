import { HexColor } from "@yext/studio";

export interface SiteSettings {
  experienceKey: string;
  GlobalColors: {
    primary: HexColor;
  };
}

export default {
  experienceKey: "slanswers",
  GlobalColors: {
    primary: "#AABBCC",
  },
};
