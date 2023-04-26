import { type Options } from "rehype-pretty-code";
import vercelLightTheme from "./themes/tokyo-nights.json";

export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  // or import a custom theme
  theme: "dracula",
  // theme: JSON.parse(JSON.stringify(vercelLightTheme)),
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
};
