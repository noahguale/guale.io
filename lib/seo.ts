import { createOgImage } from "@/lib/createOgImage";
import type { DefaultSeoProps } from "next-seo";

const title = `Noah Guale`;
const description = `Welcome to my website, where I showcase my coding projects and share my passion for programming with you.`;
const domain = `guale.io`;
const twitter = `@noahguale`;
const meta = `Software Engineer`;
export const seo: DefaultSeoProps = {
  title: title,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
};
