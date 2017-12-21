const y = require('yoga-layout');
const { Node } = y;

const rootNode = Node.create();
rootNode.setWidth(500);
rootNode.setHeight(120);
rootNode.setFlexDirection(y.FLEX_DIRECTION_ROW);
rootNode.setPadding(y.EDGE_ALL, 20);

const image = Node.create();
image.setWidth(80);
image.setMargin(y.EDGE_END, 20);

const text = Node.create();
text.setHeight(25);
text.setAlignSelf(y.ALIGN_CENTER);
text.setFlexGrow(1);

rootNode.insertChild(image, 0);
rootNode.insertChild(text, 1);

module.exports = rootNode;