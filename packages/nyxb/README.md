# nyxb

A CLI for adding components to your project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, adds the `ny` util, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx nyxb init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx nyxb add [component]
```

### Example

```bash
npx nyxb add alert-dialog
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx nyxb add
```

## Documentation

Visit https://nyxbui.design/docs/cli to view the documentation.

## License

Licensed under the [MIT license](https://github.com/nyxb-ui/ui/blob/main/LICENSE.md).
