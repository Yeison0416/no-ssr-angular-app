# no-ssr-angular-app

This project was originally generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19, but has been extended to use additional tools and custom configurations via Webpack. This allows for more advanced build customizations and features beyond the standard Angular CLI setup.

## Project Purpose

This repository serves as an initial setup (starter template) for Angular projects. You can use it as a foundation to quickly bootstrap new Angular applications with enhanced build capabilities and custom tooling out of the box.

## Development server

To start a local development server, run:

```bash
ng serve
```

When running `ng serve`, the application uses the custom Webpack configuration for development. This enables advanced build features and custom tooling during local development.

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

You can build the project using the following commands. These commands leverage the custom Webpack setup for enhanced build flexibility:

```bash
# Standard build (default configuration)
ng build

# Development build (uses custom Webpack setup)
npm run build:dev

# Production build (uses custom Webpack setup)
npm run build:prod
```

- `ng build` or `npm run build`: Compiles the project using the default configuration.
- `npm run build:dev`: Builds the project using the development configuration and the custom Webpack setup, optimized for faster builds and easier debugging.
- `npm run build:prod`: Builds the project using the production configuration and the custom Webpack setup, optimized for performance and deployment.

All build artifacts are stored in the `dist/` directory.
