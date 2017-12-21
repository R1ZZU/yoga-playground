const y = require('yoga-layout');
const { Node } = y;

const rootNode = Node.create();
rootNode.setWidth(500);
rootNode.setHeight(300);
rootNode.setFlexGrow(1);

const image = Node.create();
image.setFlexGrow(1);

const text = Node.create();
text.setWidth(300);
text.setHeight(25);
text.setMargin(y.EDGE_ALL, 20);

rootNode.insertChild(image, 0);
rootNode.insertChild(text, 1);

module.exports = rootNode;