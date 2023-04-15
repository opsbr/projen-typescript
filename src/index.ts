import { typescript, github, DevEnvironmentDockerImage } from "projen";

export class OpsBRTypeScriptProject extends typescript.TypeScriptProject {
  constructor(options: typescript.TypeScriptProjectOptions) {
    super({
      authorName: "OpsBR Software Technology Inc.",
      authorUrl: "https://opsbr.com",
      authorOrganization: true,
      devContainer: true,
      prettier: true,
      githubOptions: {
        projenCredentials: github.GithubCredentials.fromApp(),
      },
      workflowGitIdentity: {
        name: "opsbr-bot",
        email: "opsbr-bot@users.noreply.github.com",
      },
      projenrcTs: true,
      ...options,
    });
    this.devContainer?.addDockerImage(
      DevEnvironmentDockerImage.fromImage(
        "mcr.microsoft.com/devcontainers/typescript-node:0-18-bullseye"
      )
    );
  }
}
