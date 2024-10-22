
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
   content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mon-image': "url('../assets/mon-image.jpg')",
    },
  },
  plugins: [],
}
}
