# Cooperation Jumeau Numérique Solar

Code de l'application de coopération sur le cadastre solairede Rennes Métropole basée sur un jumeau numérique.

## Quick start

### Package common_ui from github registry

#### Installation

This app install the [@sigrennesmetropole/cooperation_jn_common_ui](https://github.com/sigrennesmetropole/cooperation_jn_common_ui/pkgs/npm/cooperation_jn_common_ui) package.
Although this package is public, you still need a Private Access Token (PAT) from github to download it.

In order to do that you need to follow [this instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
And create a token with package:read permission.

##### With userconfig

Then, in your personnal ~/.npmrc you need to add this line:

```shell
//npm.pkg.github.com/:_authToken=<YOUR PAT>
```

And then install dependencies with:

```shell
npm i --userconfig
```

##### With projectconfig

Or, you could also change ./npmrc project file, and replace NPM_TOKEN by your PAT.

**Careful!** If you change the project npmrc file, you must be careful and not commit the change.
The docker image in the CI is build by replacing the ${NPM_TOKEN} by the GITHUB_TOKEN of the repository.
The CI will fail.
Moreover if you commit your own PAT, it will be invalidated by Github.

If you want to work by changing the project .npmrc, the easiest way is probably to ignore it in your git index before changing it:

```shell
git update-index --skip-worktree .npmrc
```

### Configure .env file

For local development (with local [Back End](https://github.com/sigrennesmetropole/cooperation_jn_backend)), please use `.env.local.dev` to create `.env`

#### Upgrade

The [@sigrennesmetropole/cooperation_jn_common_ui](https://github.com/sigrennesmetropole/cooperation_jn_common_ui/pkgs/npm/cooperation_jn_common_ui) package is frequently patch.
Try to keep it up-to-date.

### Run the app in dev mode

```shell
npm i
npm start
```

### Run histoire

```shell
npm run story
```

### Demo

- [histoires](https://sigrennesmetropole.github.io/cooperation_jn_solar/main/)

## Docker

### Build locally the image

```shell
docker build -t cooperation_jn_solar:latest --build-arg NPM_TOKEN=<YOUR_GITHUB_NPM_TOKEN>.
```

### Run the image

```shell
docker run -p 8080:80 cooperation_jn_solar:latest
```

## Deployment of the app

### 1) Image creation

Through Github pipeline, an image is created on every push on 'main' branch, and on each pull request.
The repository for this image can be found here: https://github.com/sigrennesmetropole/cooperation_jn_solar/pkgs/container/cooperation_jn_solar/versions

#### On _pull request_

- An image is created, it is tag with 'pr-#' where # is the id of the pull request.

#### On push to the _main_ branch (after a pull request is merge)

- An image is created, it is tag with the short hash of the last commit on main branch.

<!-- ### 2) Change to the argocd repo

The repository which contains configuration of the argocd of the app is here:
https://github.com/camptocamp/argocd-gs-rennes3d-apps

It is accessible through https://argocd.apps.green.gs-fr-prod.camptocamp.com/ with RedHat c2c account.

#### Set up repo

The argocd [argocd](https://github.com/camptocamp/argocd-gs-rennes3d-apps) and this project must be set up, a private/public key must be generated (ie with openssl).

- This project must have the right to push on the [argocd](https://github.com/camptocamp/argocd-gs-rennes3d-apps) one. The private key must be store in the secret ARGOCD_PRIVATE_KEY for the pipeline to work.
- [argocd](https://github.com/camptocamp/argocd-gs-rennes3d-apps) Must register the public key as "deployment key" in the github configuration.

#### Change the conf

To deploy a new or a different image on the server, you must change the tag of the target image in the configuration of this argocd project.
There are currently three ways of doing it:

1. Manually: change the value in 'apps/dev/vcmap-demo/values.yaml' in the repo, and commit/push the change ;
2. On demand: With [this pipeline](https://github.com/sigrennesmetropole/cooperation_jn_app/actions/workflows/deploy-argocd.yml). Choose the env (currently only dev) and the tag of the image, and let the pipeline change the argocd project ;
3. Automatically: On each merge on main, the pipeline is triggered with the last generated image.

### 3) Deploy on ArgoCD

On: https://argocd.apps.green.gs-fr-prod.camptocamp.com/applications/rennes3d-dev-vcmap-demo

The app must be "OutOfSync" because a new image has been set on the _values.yaml_ file but not deploy yet. Click on sync and wait for the app to be avalaible.
-->

## Commands

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint:js
```

### Format the code with autofix (eslint + prettier)

```sh
npm run format
```

### Run histoire with Hot-Reload for Development

```sh
npm run story
```
