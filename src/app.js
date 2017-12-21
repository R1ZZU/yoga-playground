const y = require('yoga-layout');
const { render } = require('./renderer');

window.y = y;

const Examples = {
    C: require('./examples/c'),
    OBJ_C: require('./examples/obj-c'),
    JAVA: require('./examples/java'),
    C_SHARP: require('./examples/c-sharp'),
};

const rootNode = Examples.C;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;

rootNode.calculateLayout();

document.body.appendChild(canvas);

render(context, rootNode);