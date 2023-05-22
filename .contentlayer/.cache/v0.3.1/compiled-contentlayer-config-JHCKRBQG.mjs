var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// lib/themes/tokyo-nights.json
var require_tokyo_nights = __commonJS({
  "lib/themes/tokyo-nights.json"(exports, module) {
    module.exports = {
      name: "Winter Is Coming",
      type: "dark",
      tokenColors: [
        {
          settings: {
            foreground: "#bce7ff"
          }
        },
        {
          scope: [
            "meta.paragraph.markdown",
            "string.other.link.description.title.markdown"
          ],
          settings: {
            foreground: "#EEFFFF"
          }
        },
        {
          scope: [
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown"
          ],
          settings: {
            foreground: "#5ABEB0"
          }
        },
        {
          scope: [
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "markup.quote.markdown"
          ],
          settings: {
            foreground: "#82AAFF"
          }
        },
        {
          scope: ["markup.quote.markdown"],
          settings: {
            fontStyle: "italic",
            foreground: "#82AAFF"
          }
        },
        {
          scope: ["markup.bold.markdown", "punctuation.definition.bold.markdown"],
          settings: {
            fontStyle: "bold",
            foreground: "#57cdff"
          }
        },
        {
          scope: [
            "markup.italic.markdown",
            "punctuation.definition.italic.markdown"
          ],
          settings: {
            fontStyle: "italic",
            foreground: "#C792EA"
          }
        },
        {
          scope: [
            "markup.inline.raw.string.markdown",
            "markup.fenced_code.block.markdown"
          ],
          settings: {
            fontStyle: "italic",
            foreground: "#f7ecb5"
          }
        },
        {
          scope: ["punctuation.definition.metadata.markdown"],
          settings: {
            foreground: "#f3b8c2"
          }
        },
        {
          scope: [
            "markup.underline.link.image.markdown",
            "markup.underline.link.markdown"
          ],
          settings: {
            foreground: "#6dbdfa"
          }
        },
        {
          name: "Comment",
          scope: "comment",
          settings: {
            fontStyle: "italic",
            foreground: "#999999"
          }
        },
        {
          name: "Quotes",
          scope: "punctuation.definition.string",
          settings: {
            foreground: "#6bff81"
          }
        },
        {
          name: "String",
          scope: "string",
          settings: {
            foreground: "#bcf0c0"
          }
        },
        {
          name: "String Quoted",
          scope: ["string.quoted", "variable.other.readwrite.js"],
          settings: {
            fontStyle: "",
            foreground: "#bcf0c0"
          }
        },
        {
          name: "Number",
          scope: "constant.numeric",
          settings: {
            foreground: "#8dec95"
          }
        },
        {
          name: "Boolean",
          scope: "constant.language.boolean",
          settings: {
            foreground: "#8dec95"
          }
        },
        {
          name: "Constant",
          scope: "constant",
          settings: {
            foreground: "#A170C6"
          }
        },
        {
          name: "Built-in constant",
          scope: [
            "constant.language",
            "punctuation.definition.constant",
            "variable.other.constant"
          ],
          settings: {
            foreground: "#92b6f4"
          }
        },
        {
          name: "User-defined constant",
          scope: ["constant.character", "constant.other"],
          settings: {
            foreground: "#82AAFF"
          }
        },
        {
          name: "Variable",
          scope: "variable",
          settings: {
            fontStyle: "italic",
            foreground: "#a4ceee"
          }
        },
        {
          name: "JavaScript Other Variable",
          scope: "variable.other.object.js",
          settings: {
            foreground: "#d6deeb",
            fontStyle: "italic"
          }
        },
        {
          name: "TypeScript[React] Variables and Object Properties",
          scope: [
            "variable.other.readwrite.alias.ts",
            "variable.other.readwrite.alias.tsx",
            "variable.other.readwrite.ts",
            "variable.other.readwrite.tsx",
            "variable.other.object.ts",
            "variable.other.object.tsx",
            "variable.object.property.ts",
            "variable.object.property.tsx",
            "variable.other.ts",
            "variable.other.tsx",
            "variable.tsx",
            "variable.ts"
          ],
          settings: {
            foreground: "#d6deeb"
          }
        },
        {
          name: "TypeScript Classes",
          scope: "meta.class entity.name.type.class.tsx",
          settings: {
            foreground: "#d29ffcff"
          }
        },
        {
          name: "TypeScript Entity Name Type",
          scope: ["entity.name.type.tsx", "entity.name.type.module.tsx"],
          settings: {
            foreground: "#d29ffcff"
          }
        },
        {
          name: "TypeScript Method Declaration e.g. `constructor`",
          scope: [
            "meta.method.declaration storage.type.ts",
            "meta.method.declaration storage.type.tsx"
          ],
          settings: {
            foreground: "#a1bde6"
          }
        },
        {
          name: "Variable Property Other object property",
          scope: ["variable.other.object.property"],
          settings: {
            foreground: "#f7ecb5",
            fontStyle: "italic"
          }
        },
        {
          name: "Variable Instances",
          scope: [
            "variable.instance",
            "variable.other.instance",
            "variable.readwrite.instance",
            "variable.other.readwrite.instance",
            "variable.other.property"
          ],
          settings: {
            foreground: "#7fdbca"
          }
        },
        {
          name: "JavaScript Variable Other ReadWrite",
          scope: ["variable.other.readwrite.js", "variable.parameter"],
          settings: {
            foreground: "#d7dbe0"
          }
        },
        {
          name: "Template Strings",
          scope: "string.template meta.template.expression",
          settings: {
            foreground: "#c63ed3"
          }
        },
        {
          name: "Backtics(``) in Template Strings",
          scope: "string.template punctuation.definition.string",
          settings: {
            foreground: "#fff"
          }
        },
        {
          name: "Storage",
          scope: "storage",
          settings: {
            fontStyle: "",
            foreground: "#6dbdfa"
          }
        },
        {
          name: "Keywords and Storage types",
          scope: [
            "keyword",
            "storage.type",
            "storage.modifier",
            "variable.language.this"
          ],
          settings: {
            foreground: "#00bff9",
            fontStyle: "italic"
          }
        },
        {
          name: "Keywords operators",
          scope: ["keyword.operator"],
          settings: {
            foreground: "#00bff9",
            fontStyle: "italic"
          }
        },
        {
          name: "Storage",
          scope: [
            "storage",
            "meta.var.expr",
            "meta.class meta.method.declaration meta.var.expr storage.type.js",
            "storage.type.property.js",
            "storage.type.property.ts"
          ],
          settings: {
            foreground: "#c792ea",
            fontStyle: "italic"
          }
        },
        {
          name: "JavaScript module imports and exports",
          scope: [
            "variable.other.meta.import.js",
            "meta.import.js variable.other",
            "variable.other.meta.export.js",
            "meta.export.js variable.other"
          ],
          settings: {
            foreground: "#d3eed6"
          }
        },
        {
          name: "Class name",
          scope: "entity.name.class",
          settings: {
            foreground: "#f7ecb5"
          }
        },
        {
          name: "Inherited class",
          scope: "entity.other.inherited-class",
          settings: {
            fontStyle: "",
            foreground: "#4FB4D8"
          }
        },
        {
          name: "Variables, Let and Const",
          scope: ["variable.other.readwrites", "meta.definition.variable"],
          settings: {
            fontStyle: "",
            foreground: "#f7ecb5"
          }
        },
        {
          name: "Support Variable Property",
          scope: "support.variable.property",
          settings: {
            foreground: "#7fdbca"
          }
        },
        {
          name: "Function name",
          scope: "entity.name.function",
          settings: {
            fontStyle: "italic",
            foreground: "#87aff4"
          }
        },
        {
          name: "Function argument",
          scope: "variable.parameter",
          settings: {
            foreground: "#d7dbe0",
            fontStyle: ""
          }
        },
        {
          name: "Tag name",
          scope: "entity.name.tag",
          settings: {
            fontStyle: "",
            foreground: "#6dbdfa"
          }
        },
        {
          name: "Entity Name Type",
          scope: "entity.name.type",
          settings: {
            foreground: "#d29ffc"
          }
        },
        {
          name: "Tag attribute",
          scope: "entity.other.attribute-name",
          settings: {
            fontStyle: "italic",
            foreground: "#f7ecb5"
          }
        },
        {
          name: "Meta - Decorator",
          scope: ["punctuation.decorator"],
          settings: {
            fontStyle: "italic",
            foreground: "#f7ecb5"
          }
        },
        {
          name: "Punctuation/Brackets/Tags",
          scope: ["punctuation.definition.block", "punctuation.definition.tag"],
          settings: {
            foreground: "#ffffff"
          }
        },
        {
          name: "Library function",
          scope: "support.function",
          settings: {
            fontStyle: "",
            foreground: "#f7ecb5"
          }
        },
        {
          name: "Library constant",
          scope: "support.constant",
          settings: {
            fontStyle: "",
            foreground: "#ec9cd2"
          }
        },
        {
          name: "Library class/type",
          scope: ["support.type", "support.class"],
          settings: {
            foreground: "#7fdbca"
          }
        },
        {
          name: "Library variable",
          scope: "support.other.variable",
          settings: {
            foreground: "#CBCDD2"
          }
        },
        {
          name: "Invalid",
          scope: "invalid",
          settings: {
            fontStyle: " italic bold underline",
            foreground: "#6dbdfa"
          }
        },
        {
          name: "Invalid deprecated",
          scope: "invalid.deprecated",
          settings: {
            foreground: "#6dbdfa",
            fontStyle: " bold italic underline"
          }
        },
        {
          name: "JSON Property Names",
          scope: "support.type.property-name.json",
          settings: {
            foreground: "#91dacd"
          }
        },
        {
          name: "JSON Support Constants",
          scope: "support.constant.json",
          settings: {
            foreground: "#addb67"
          }
        },
        {
          name: "JSON Property values (string)",
          scope: "meta.structure.dictionary.value.json string.quoted.double",
          settings: {
            foreground: "#e0aff5"
          }
        },
        {
          name: "Strings in JSON values",
          scope: "string.quoted.double.json punctuation.definition.string.json",
          settings: {
            foreground: "#80CBC4"
          }
        },
        {
          name: "Specific JSON Property values like null",
          scope: "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
          settings: {
            foreground: "#f29fd8"
          }
        },
        {
          name: "[JSON] - Support",
          scope: "source.json support",
          settings: {
            foreground: "#6dbdfa"
          }
        },
        {
          name: "[JSON] - String",
          scope: [
            "source.json string",
            "source.json punctuation.definition.string"
          ],
          settings: {
            foreground: "#ece7cd"
          }
        },
        {
          name: "Lists",
          scope: "markup.list",
          settings: {
            foreground: "#6dbdfa"
          }
        },
        {
          name: "Headings",
          scope: [
            "markup.heading punctuation.definition.heading",
            "entity.name.section"
          ],
          settings: {
            fontStyle: "",
            foreground: "#4FB4D8"
          }
        },
        {
          name: "Support",
          scope: [
            "text.html.markdown meta.paragraph meta.link.inline",
            "text.html.markdown meta.paragraph meta.link.inline punctuation.definition.string.begin.markdown",
            "text.html.markdown meta.paragraph meta.link.inline punctuation.definition.string.end.markdown"
          ],
          settings: {
            foreground: "#78bd65"
          }
        },
        {
          name: "[Markdown] text ",
          scope: ["meta.paragraph.markdown"],
          settings: {
            foreground: "#ffffff"
          }
        },
        {
          name: "Quotes",
          scope: "markup.quote",
          settings: {
            foreground: "#78bd65",
            fontStyle: "italic"
          }
        },
        {
          name: "Link Url",
          scope: "meta.link",
          settings: {
            foreground: "#78BD65"
          }
        },
        {
          name: "Dockerfile",
          scope: "source.dockerfile",
          settings: {
            foreground: "#99d0f7"
          }
        }
      ],
      colors: {
        "activityBar.background": "#282822",
        "activityBar.foreground": "#99d0f7",
        "activityBar.border": "#219fd544",
        "activityBarBadge.background": "#219fd5",
        "activityBarBadge.foreground": "#ffffff",
        "badge.background": "#219fd5",
        "badge.foreground": "#ffffff",
        "button.background": "#4f4f4f",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "#219fd5",
        contrastActiveBorder: "#122d42",
        contrastBorder: "#122d42",
        foreground: "#d6deeb",
        "debugExceptionWidget.background": "#282822",
        "debugToolBar.background": "#022846",
        "diffEditor.insertedTextBackground": "#99b76d23",
        "diffEditor.insertedTextBorder": "#addb6733",
        "diffEditor.removedTextBackground": "#ef535033",
        "diffEditor.removedTextBorder": "#ef53504d",
        "editor.background": "#282822",
        "editor.foreground": "#a7dbf7",
        "editor.hoverHighlightBackground": "#0c4994",
        "editor.lineHighlightBackground": "#0c499477",
        "editor.selectionBackground": "#103362",
        "editor.selectionHighlightBackground": "#103362",
        "editor.findMatchHighlightBackground": "#103362",
        "editor.rangeHighlightBackground": "#103362",
        "editor.wordHighlightBackground": "#103362",
        "editor.wordHighlightStrongBackground": "#103362",
        "editor.inactiveSelectionBackground": "#7e57c25a",
        "editorBracketMatch.background": "#219fd54d",
        "editorOverviewRuler.currentContentForeground": "#7e57c2",
        "editorOverviewRuler.incomingContentForeground": "#7e57c2",
        "editorOverviewRuler.commonContentForeground": "#7e57c2",
        "editorCursor.foreground": "#219fd5",
        "editorError.foreground": "#ef5350",
        "editorGroup.border": "#219fd544",
        "editorGroupHeader.tabsBackground": "#282822",
        "editorGutter.background": "#282822",
        "editorHoverWidget.background": "#282822",
        "editorIndentGuide.activeBackground": "#C792EA",
        "editorLineNumber.foreground": "#219fd5",
        "editorWarning.foreground": "#ffca28",
        "editorWhitespace.foreground": "#3B3A32",
        "editorWidget.background": "#0b2942",
        "editorWidget.border": "#262A39",
        "editorSuggestWidget.background": "#2C3043",
        "editorSuggestWidget.border": "#2B2F40",
        "editorSuggestWidget.foreground": "#d6deeb",
        "editorSuggestWidget.highlightForeground": "#ffffff",
        "editorSuggestWidget.selectedBackground": "#5f7e97",
        "editorHoverWidget.border": "#5f7e97",
        "editorIndentGuide.background": "#0e2c45",
        errorForeground: "#EF5350",
        "gitDecoration.modifiedResourceForeground": "#219fd5",
        "gitDecoration.untrackedResourceForeground": "#5ABEB0",
        "input.background": "#0b253a",
        "input.border": "#5f7e97",
        "input.foreground": "#ffffffcc",
        "input.placeholderForeground": "#5f7e97",
        "inputOption.activeBorder": "#ffffff",
        "inputValidation.errorBackground": "#ef5350",
        "inputValidation.errorBorder": "#ef5350",
        "inputValidation.infoBackground": "#219fd5",
        "inputValidation.infoBorder": "#219fd5",
        "inputValidation.warningBackground": "#f7ecb5",
        "inputValidation.warningBorder": "#f7ecb5",
        "inputValidation.warningForeground": "#000000",
        "list.activeSelectionBackground": "#219fd5",
        "list.inactiveSelectionBackground": "#0e293f",
        "list.inactiveSelectionForeground": "#5f7e97",
        "list.invalidItemForeground": "#975f94",
        "list.dropBackground": "#282822",
        "list.focusBackground": "#03648a",
        "list.focusForeground": "#ffffff",
        "list.highlightForeground": "#ffffff",
        "list.hoverBackground": "#282822",
        "list.hoverForeground": "#219fd5",
        "notifications.background": "#282822",
        "notifications.foreground": "#ffffffcc",
        "notificationLink.foreground": "#80CBC4",
        "notificationToast.border": "#219fd544",
        "panel.background": "#282822",
        "panel.border": "#219fd5",
        "panelTitle.activeBorder": "#5f7e97",
        "panelTitle.activeForeground": "#219fd5",
        "panelTitle.inactiveForeground": "#5f7e97",
        "peekView.border": "#f7ecb5",
        "peekViewEditor.background": "#282822",
        "peekViewResult.background": "#282822",
        "peekViewTitle.background": "#282822",
        "peekViewEditor.matchHighlightBackground": "#7e57c25a",
        "peekViewResult.matchHighlightBackground": "#7e57c25a",
        "peekViewResult.selectionBackground": "#2E3250",
        "peekViewResult.selectionForeground": "#cecece",
        "peekViewTitleDescription.foreground": "#697098",
        "peekViewTitleLabel.foreground": "#cecece",
        "pickerGroup.border": "#219fd544",
        "quickInput.list.focusBackground": "#219fd5",
        "scrollbar.shadow": "#010b14",
        "scrollbarSlider.activeBackground": "#084d8180",
        "scrollbarSlider.background": "#084d8180",
        "scrollbarSlider.hoverBackground": "#084d8180",
        "selection.background": "#4373c2",
        "sideBar.background": "#282822",
        "sideBar.border": "#219fd544",
        "sideBarSectionHeader.background": "#282822",
        "sideBar.foreground": "#7799bb",
        "sideBarTitle.foreground": "#7799bb",
        "sideBarSectionHeader.foreground": "#7799bb",
        "statusBar.background": "#219fd5",
        "statusBar.debuggingBackground": "#b15a91",
        "statusBar.noFolderBackground": "#282822",
        "statusBarItem.activeBackground": "#4f4f4f",
        "statusBarItem.hoverBackground": "#4f4f4f",
        "statusBarItem.prominentBackground": "#4f4f4f",
        "statusBarItem.prominentHoverBackground": "#4f4f4f",
        "tab.activeBackground": "#0b2942",
        "tab.activeForeground": "#d2dee7",
        "tab.inactiveBackground": "#010e1a",
        "tab.inactiveForeground": "#5f7e97",
        "tab.activeBorderTop": "#219fd5",
        "terminal.ansiBlack": "#282822",
        "textLink.foreground": "#219fd5",
        "textLink.activeForeground": "#98c8ed",
        "titleBar.activeBackground": "#112233",
        "titleBar.activeForeground": "#eeefff",
        "titleBar.border": "#303030",
        "titleBar.inactiveBackground": "#000a11",
        "walkThrough.embeddedEditorBackground": "#001111",
        "welcomePage.buttonBackground": "#282822",
        "welcomePage.buttonHoverBackground": "#282822",
        "widget.shadow": "#219fd5"
      }
    };
  }
});

// contentlayer.config.ts
import { remarkCodeHike } from "@code-hike/mdx";
import { makeSource, defineDatabase } from "contentlayer-source-notion";
import { Client } from "@notionhq/client";
var someTheme = require_tokyo_nights();
var NOTION_TOKEN = "secret_KsYpxhUU9eM1hDFSC85MwlhE5zdaEsNkI2NYVAqypKy";
console.log(NOTION_TOKEN);
var client = new Client({ auth: NOTION_TOKEN });
var Post = defineDatabase(() => ({
  name: "Post",
  databaseId: "0bf6f4acda9f487286d1f47e7745447e",
  query: {
    filter: {
      property: "Status",
      status: {
        equals: "Published"
      }
    }
  },
  properties: {
    date: {
      name: "Created time"
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._id}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  // Location of source files for all defined documentTypes
  client,
  databaseTypes: [Post],
  mdx: {
    // rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions,]],
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          lineNumbers: true,
          showCopyButton: true,
          theme: "dracula",
          skipLanguages: ["mermaid"],
          staticMediaQuery: "not screen, (max-width: 768px)",
          autoImport: true
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JHCKRBQG.mjs.map
