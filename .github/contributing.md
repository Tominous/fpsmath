# Contributing

Thank you for being interested in contributing in fpsmath.

By deciding to contribute to this project you accept the [Code of Conduct][code of conduct].

## Workflow

1. Fork and clone this repository.
2. Create a new branch in your fork based off the **main** branch.
3. Make your changes.
4. Commit your changes, and push them.
5. Submit a Pull Request [here]!

## Contributing to the guides/documentation

All guides for FPSMath use Markdown formatting.

When writing guides/documentation there are some rules to follow:

1. All files should have the `.md` file extension.
2. Folder names are allowed to have spaces.
3. All folder and file names should be in lower case and different words should be split by hyphens (e.g., `hello-world` or `getting-started`).
4. File names should _never_ have spaces.
5. Information in a guide page should be generally useful to the majority of people.

## Contributing to the code

**The issue tracker is only for issue reporting or proposals/suggestions. If you have a question, you can find us in our [Discord Server][discord server]**.

To contribute to this repository, feel free to create a new fork of the repository and
submit a pull request. We highly suggest [ESLint] to be installed
in your text editor or IDE of your choice to ensure builds from GitHub Actions do not fail.

**_Before committing and pushing your changes, please ensure that you do not have any linting errors by running `yarn lint`!_**

## Running FPSMath locally

To run FPSMath locally a few steps should be taken.

1. Install [Node.JS] and [Yarn].
1. Copy and paste the [`.env.example`] file and rename it to `.env`.
1. Scroll down to the tokens section.
1. At this section enter your own bot's API token at `DISCORD_TOKEN`.
1. Fill in any other API keys you have / want to fill in.
1. Install project dependencies with `yarn install`.
1. Start FPSMath in development mode with `yarn dev`.

A few other important commands:

```bash
# Lints and format all the code:
$ yarn lint

# Run FPSMath in development mode:
$ yarn start
```

## FPSMath Concept Guidelines

There are a number of guidelines considered when reviewing Pull Requests to be merged. _This is by no means an exhaustive list, but here are some things to consider before/while submitting your ideas._

- FPSMath should never change Sapphire's or Discord.js' default behavior. FPSMath should only add to Sapphire and Discord.js, and be as consistent as possible with them.
- Everything in FPSMath should be generally useful for the majority of users. Don't let that stop you if you've got a good concept though, as your idea still might be a great addition.
- Everything should be shard compliant. If code you put in a pull request would break when sharding, break other things from supporting sharding, or is incompatible with sharding; then you will need to think of a way to make it work with sharding in mind before the pull request will be accepted and merged.
- Everything should follow [OOP paradigms] and generally rely on behaviour over state where possible. This generally helps methods be predictable, keeps the codebase simple and understandable, reduces code duplication through abstraction, and leads to efficiency and therefore scalability.
- Everything should follow our ESLint rules as closely as possible, and should pass lint tests even if you must disable a rule for a single line.
- Everything should follow [Discord Bot Best Practices]

<!-- Link Dump -->

[discord server]: https://discord.gg/Bg2gNT35s9
[here]: https://github.com/animafps/fpsmath/pulls
[eslint]: https://eslint.org/
[node.js]: https://nodejs.org/en/download/
[yarn]: https://yarnpkg.com/en/docs/install
[oop paradigms]: https://en.wikipedia.org/wiki/Object-oriented_programming
[discord bot best practices]: https://github.com/meew0/discord-bot-best-practices
[`.env.example`]: ../.env.example
[code of conduct]: code_of_conduct.md
