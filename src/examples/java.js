const y = require('yoga-layout');
const { Node } = y;

const rootNode = new Node.create();
rootNode.setWidth(500);
rootNode.setHeight(300);
rootNode.setAlignItems(y.ALIGN_CENTER);
rootNode.setJustifyContent(y.JUSTIFY_CENTER);
rootNode.setPadding(y.EDGE_ALL, 20);

const text = new Node.create();
text.setWidth(200);
text.setHeight(25);

const image = new Node.create();
image.setWidth(50);
image.setHeight(50);
image.setPositionType(y.POSITION_TYPE_ABSOLUTE);
image.setPosition(y.EDGE_END, 20);
image.setPosition(y.EDGE_TOP, 20);

rootNode.insertChild(text, 0);
rootNode.insertChild(image, 1);

module.exports = rootNode;