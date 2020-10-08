# Contribution Guidelines

The new features and bug fixes are merged into `develop` branch. The `master` branch
contains the latest stable release.

Please, follow the following steps to contribute

- Clone the repository.
- Checkout `develop` branch.
- Create feature or bug fixing branch using `git flow`
- Install dependencies.
- Add your new features or fixes.
- Build the project.
- Create a working example file.
- Send PR.

```sh
$ git clone https://github.com/chartshq/react-muze.git
$ cd react-muze
$ git checkout develop
$ git flow init
$ git flow feature start <your-feature-branch-name>
$ yarn install
$ yarn build
$ cd dist && yarn link
```

Create a working example for the fixed issue in /examples directory

```sh
$ yarn install
$ cd examples
$ yarn link @chartshq/react-muze
$ yarn start
```
