import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryPath = "/projeto-missao-aprender";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? repositoryPath : "",
  assetPrefix: isGitHubPages ? repositoryPath : "",
  images: { unoptimized: true },
};

export default nextConfig;
