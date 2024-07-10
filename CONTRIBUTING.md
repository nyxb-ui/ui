# Contributing

Thanks for your interest in contributing to nyxbui.design. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@nyxb](https://twitter.com/nyxb0).

## About this repository

This repository is a monorepo.

-  We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
-  We use [Turborepo](https://turbo.build/repo) as our build system.
-  We use [bumping](https://github.com/nyxb/bumping) for managing releases.

## Structure

This repository is structured as follows:

```
apps
└── www
    ├── app
    ├── components
    ├── content
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── miami
            ├── example
            └── ui
packages
└── cli
```

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `apps/web/app`        | The Next.js application for the website. |
| `apps/web/components` | The React components for the website.    |
| `apps/web/content`    | The content for the website.             |
| `apps/web/registry`   | The registry for the components.         |
| `packages/cli`        | The `nyxbui` package.                    |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/ui.git
```

### Navigate to project directory

```bash
cd ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the `nyxbui.design` website:

```bash
pnpm --filter=web dev
```

2. To run the `nyxbui` package:

```bash
pnpm --filter=nyxbui dev
```

## Documentation

The documentation for this project is located in the `web` workspace. You can run the documentation locally by running the following command:

```bash
pnpm --filter=web dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/web/content/docs` directory.

## Components

We use a registry system for developing components. You can find the source code for the components under `apps/web/registry`. The components are organized by styles.

```bash
apps
└── web
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── miami
            ├── example
            └── ui
```

When adding or modifying components, please ensure that:

1. You make the changes for every style.
2. You update the documentation.
3. You run `pnpm build:registry` to update the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit, we kindly ask you to follow the convention `:emoji: category(scope or module): message` in your commit message. The available emojis and categories can be found at [conventional-emoji-commits](https://conventional-emoji-commits.site).

Examples of commit messages:

-  `:sparkles: feat(components): add new prop to the avatar component`
-  `:bug: fix(button): correct button alignment issue`
-  `:memo: docs(readme): update installation instructions`

For a detailed specification, you can visit the [conventional-emoji-commits](https://conventional-emoji-commits.site) page.

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.

## Adding to the showcase

### 1. Create your showcase as a MDX file

Create your showcase in `content/showcase/website-name.mdx`

```mdx
---
title: website-name.com
description: Website description
image: /showcase/website-name.png
href: https://website-name.com
featured: true
affiliation: YC S25, raised $10M
---
```

### 2. Create an image

Upload an image of your site to `public/showcase/website-name.png`

## CLI

The `nyxbui` package is a CLI for adding components to your project. You can find the documentation for the CLI [here](https://nyxbui.design/docs/cli).

Any changes to the CLI should be made in the `packages/cli` directory. If you can, it would be great if you could add tests for your changes.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
