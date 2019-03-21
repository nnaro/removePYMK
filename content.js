function removePYMK(){
    var contentArea = document.getElementById('contentArea');
    if (contentArea) {
        [].forEach.call(contentArea.getElementsByClassName('fwb fcb'), function(node) {
            for (var i = 0; i < 10; i++) {
                if (node.parentNode) {
                    node = node.parentNode;
                }
            }
            console.log(node);
            node.remove();
        });
    }
}

document.addEventListener("DOMSubtreeModified", function (event) {
    removePYMK();
});
