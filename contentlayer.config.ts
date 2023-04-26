import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "./lib/rehypePrettyCode";
import { remarkCodeHike } from "@code-hike/mdx";
const someTheme = require(".//lib/themes/tokyo-nights.json");

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
    tags: {
      type: "list",
      of: Tag,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `projects/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    stack: {
      type: "list",
      of: { type: "string" },
    },
    githubUrl: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Post, Project],
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
          autoImport: true,
        },
      ],
    ],
  },
});

import { defineNestedType } from "contentlayer/source-files";

export const allTagNames = ["Next.js", "MDX", "Next Conf", "React Conf"];
export const allTagSlugs = ["next", "mdx", "next-conf", "react-conf"];

export const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "enum",
      required: true,
      options: allTagNames,
    },
    slug: {
      type: "enum",
      required: true,
      options: allTagSlugs,
    },
  },
}));
