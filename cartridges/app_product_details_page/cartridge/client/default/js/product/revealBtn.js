"use strict";

/**
 * Reveal full product details when the View Details button is clicked.
 */

(function revealDetails() {
    var revealDetailsBtn = $(".js-reveal-details-btn");

    if (revealDetailsBtn.length > 1) {
        for (var index = 0; index < revealDetailsBtn.length; index++) {
            var currentBtnInstance = revealDetailsBtn.eq(index);
            var collapsedDescription = $(".js-collapsed-description").eq(index);
            var revealedDescription = $(".js-revealed-description").eq(index);

            addShortDescriptionListeners(currentBtnInstance, collapsedDescription, revealedDescription);
        }
    } else {
        var collapsedDescription = $(".js-collapsed-description");
        var revealedDescription = $(".js-revealed-description");

        addShortDescriptionListeners(revealDetailsBtn, collapsedDescription, revealedDescription);
    }
})();

/**
 * Add event listener for the View Details button.
 */

function addShortDescriptionListeners(revealDetailsBtn, collapsedDescription, revealedDescription) {
    revealDetailsBtn.on("click", function () {
        revealDetailsBtn.remove();
        collapsedDescription.remove();
        revealedDescription.removeClass("d-none");
    });
}
