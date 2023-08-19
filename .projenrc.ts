import { cdk, DevEnvironmentDockerImage } from "projen";
import { GithubCredentials } from "projen/lib/github";
import { NpmAccess } from "projen/lib/javascript";
const project = new cdk.JsiiProject({
  author: "OpsBR Software Technology Inc.",
  authorAddress: "https://opsbr.com",
  authorOrganization: true,
  defaultReleaseBranch: "main",
  name: "projen-typescript",
  packageName: "@opsbr/projen-typescript",
  npmAccess: NpmAccess.PUBLIC,
  repositoryUrl: "https://github.com/opsbr/projen-typescript.git",
  devContainer: true,
  prettier: true,
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
  workflowGitIdentity: {
    name: "opsbr-bot",
    email: "opsbr-bot@users.noreply.github.com",
  },
  peerDeps: ["projen"],
  projenrcTs: true,
  jsiiVersion: "5.x",
  typescriptVersion: "5.x",
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["github-bot", "opsbr-bot"],
  },
});
project.devContainer?.addDockerImage(
  DevEnvironmentDockerImage.fromImage(
    "mcr.microsoft.com/devcontainers/typescript-node:0-18-bullseye"
  )
);
project.synth();
