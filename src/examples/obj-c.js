const y = require('yoga-layout');
const { Node } = y;

const rootNode = Node.create();
rootNode.setWidth(500);
rootNode.setHeight(300);
rootNode.setAlignItems(y.ALIGN_CENTER);
rootNode.setJustifyContent(y.JUSTIFY_CENTER);
rootNode.setPadding(y.EDGE_ALL, 20);

const image = Node.create();
image.setWidth(150);
image.setHeight(150);
image.setMargin(y.EDGE_BOTTOM, 20);

const text = Node.create();
text.setHeight(25);
text.setWidth(100);

rootNode.insertChild(image, 0);
rootNode.insertChild(text, 1);

module.exports = rootNode;