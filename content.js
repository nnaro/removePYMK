function removePYMK(){
    var contentArea = document.getElementById('contentArea');
    if (contentArea) {
        [].forEach.call(contentArea.getElementsByClassName('fwb fcb'), function(node) {
            while ((node = node.parentNode) && node.classList.contains('userContentWrapper') === false);
            node.parentNode.remove();
        });
    }
}

document.addEventListener("DOMSubtreeModified", function (event) {
    removePYMK();
});
