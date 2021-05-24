exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  });
};
