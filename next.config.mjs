import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? "/Real-estate-virtual-chatbots" : "",
  assetPrefix: isGithubPages ? "/Real-estate-virtual-chatbots/" : "",
  turbopack: {
    root: projectRoot
  }
};

export default nextConfig;
