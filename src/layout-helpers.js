exports.getBoundingClientRect = function getBoundingClientRect(node) {
    const top = node.getComputedTop();
    const left = node.getComputedLeft();
    const width = node.getComputedWidth();
    const height = node.getComputedHeight();

    return { top, left, width, height };
}
