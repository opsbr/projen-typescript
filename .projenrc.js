const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Ryosuke Iwanaga',
  authorAddress: 'riywo@opsbr.com',
  defaultReleaseBranch: 'main',
  name: 'projen-typescript',
  repositoryUrl: 'https://github.com/riywo/projen-typescript.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();