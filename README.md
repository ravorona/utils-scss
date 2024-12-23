# SCSS Utils

Utility to set up scss stylesheets for a new project.

## Usage

```bash
# Install scss stylesheets
npx @ravorona/utils-scss

# Install scss stylesheets in a custom directory
npx @ravorona/utils-scss --destination myFolder
```

## Requirements

On your bundler side:

- [Sass](https://sass-lang.com/install/) support, since stylesheets are in SCSS format.

## Optional dependencies

If you want to use pre-processor like PostCSS, some examples are available, such as custom media, svg-inline, etc... Feel free to customize the `postcss.config.js` according to your needs.
Following dependencies are needed to run the provided pre-processing:

- [PostCSS](https://postcss.org)
- [PostCSS SCSS parser](https://github.com/postcss/postcss-scss)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS Custom Media](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media)
- [PostCSS Inline SVG](https://github.com/TrySound/postcss-inline-svg)
