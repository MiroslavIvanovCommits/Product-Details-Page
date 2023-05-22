"use strict";

/**
 * @namespace Product
 */

var server = require("server");
server.extend(module.superModule);

var contentID = "promotional-messages";

/**
* Product-Show : This endpoint is called to show the details of the selected product
* @name Product-Show
* @function
* @memberof Product
* @param {querystringparameter} - pid - Product ID
* @param {category} - non-sensitive
* @param {renders} - isml
* @param {serverfunction} - append
*/

server.append("Show", function (req, res, next) {
    var ContentMgr = require('/dw/content/ContentMgr');
    var specialOffersContent = ContentMgr.getContent(contentID);

    var viewData = res.getViewData()
    viewData.specialOffers = specialOffersContent;
    res.setViewData(viewData);

    next();
});

module.exports = server.exports();
