// import HtmlIcon from "../assets/icons/html5-original.svg";
// import CssIcon from "../assets/icons/css3-original.svg";
// import JsIcon from "../assets/icons/javascript-original.svg";
// import ReactIcon from "../assets/icons/react-original.svg";
// import NodeIcon from "../assets/icons/nodejs-original.svg";
// import GitIcon from "../assets/icons/git-original.svg";

import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NodeIcon,
  GitIcon,
  TsIcon,
} from "../assets/icons";
import NextIcon from "../assets/icons/next-original.svg";
import {
  amber,
  blue,
  cyan,
  green,
  indigo,
  red,
  sky,
  teal,
  violet,
} from "../helpers/color";

export const devSkills = {
  htmlSkill: {
    id: 0,
    name: "HTML",
    icon: HtmlIcon,
    color: indigo,
    darkColor: "#8B5CF6",
    colorB: "rgba(99, 102, 241, 0.18)",
  },
  cssSkill: {
    id: 1,
    name: "CSS",
    icon: CssIcon,
    color: teal,
    darkColor: "#14B8A6",
    colorB: "rgba(20, 184, 166, 0.18)",
  },
  jsSkill: {
    id: 2,
    name: "JavaScript",
    icon: JsIcon,
    color: amber,
    darkColor: "#EAB308",
    colorB: "rgba(234, 179, 8, 0.18)",
  },
  tsSkill: {
    id: 5,
    name: "TypeScript",
    icon: TsIcon,
    color: sky,
    darkColor: "#38BDF8",
    colorB: "rgba(14, 165, 233, 0.18)",
  },
  reactSkill: {
    id: 3,
    name: "React",
    icon: ReactIcon,
    color: red,
    darkColor: red,
    colorB: "rgba(239, 68, 68, 0.18)",
  },
  nextSkill: {
    id: 4,
    name: "NextJS",
    icon: NextIcon,
    color: blue,
    darkColor: blue,
    colorB: "rgba(59, 130, 246, 0.18)",
  },
  gitSkill: {
    id: 6,
    name: "Git",
    icon: GitIcon,
    color: violet,
    darkColor: violet,
    colorB: "rgba(167, 139, 250, 0.18)",
  },
};
