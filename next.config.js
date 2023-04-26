// next.config.js

const {
  remarkCodeHike,
} = require("@code-hike/mdx")


module.exports = {
    images: {
      domains: ['www.craftz.dog'],
    },
  }

const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkCodeHike],
  },
})

module.exports = withMDX({
  pageExtensions: [
    "ts", "tsx", "js", 
    "jsx", "md", "mdx"
  ],
})
