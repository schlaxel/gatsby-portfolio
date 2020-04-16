const path = require(`path`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');;

exports.onCreateNode =({ node, getNode, boundActionCreators }) => {
  // Create a new field to identify blog or news. Save as collection.
  fmImagesToRelative(node);
  if (node.internal.type === 'MarkdownRemark') {
      const { createNodeField } = boundActionCreators;
      node.collection = getNode(node.parent).sourceInstanceName;
  }
}