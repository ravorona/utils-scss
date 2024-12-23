const config = {
  plugins: {
    autoprefixer: {},
    'postcss-custom-media': {},
    'postcss-inline-svg': {
      paths: [
        // @todo: Update path to svg files according to your assets location
        './assets/svg'
      ],
      removeStroke: true,
      removeFill: true
    }
  }
}

export default config
