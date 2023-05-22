"use strict";

var base = module.superModule;

base.deliveryInfo = require("./delivery");
base.recommendations = require("./recommendations");

module.exports = base;
