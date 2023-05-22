'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    processInclude(require('./product/revealBtn'));
    processInclude(require('./product/changeQuantity'));
    processInclude(require('./product/recommendationsCarousel'));
});
