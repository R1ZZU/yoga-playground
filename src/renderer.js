exports.render = function render(context, node) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();
    context.translate(10, 10);

    node.calculateLayout();
    renderNode(context, node);
    context.restore();
}

function renderNode(context, node) {
    const { top, left, width, height } = node.getComputedLayout();

    context.strokeRect(top, left, width, height);

    for (let i = 0; i < node.getChildCount(); i++) {
        renderNode(context, node.getChild(i));
    }
}