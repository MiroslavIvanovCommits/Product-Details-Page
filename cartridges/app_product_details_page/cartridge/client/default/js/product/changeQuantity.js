"use strict";

/**
 * Update quantity value when one of the buttons for changing it is clicked.
 */

(function updateQuantity() {
    var selectQuantity = $(".js-quantity-select");
    var addBtn = $(".js-quantity-add");
    var removeBtn = $(".js-quantity-remove");

    // Remove dropdown menu
    selectQuantity.on("mousedown", (e) => {
        e.preventDefault();
    }, false);

    changeCount(addBtn, selectQuantity);
    changeCount(removeBtn, selectQuantity);
})();

function changeCount(clickedButton, selectQuantity) {
    clickedButton.on("click", () => {
        var selectedIndex = selectQuantity.prop("selectedIndex");
        var currElement = selectQuantity.prop("options")[selectedIndex];
        var nextElement;

        if (clickedButton.hasClass('js-quantity-add') && currElement.text !== "10") {
            nextElement = selectQuantity.prop("options")[selectedIndex + 1];
            currElement.removeAttribute("selected");
            nextElement.setAttribute("selected", "");
        }

        if (clickedButton.hasClass('js-quantity-remove') && currElement.text !== "1") {
            nextElement = selectQuantity.prop("options")[selectedIndex - 1];
            currElement.removeAttribute("selected");
            nextElement.setAttribute("selected", "");
        }
    });
}
