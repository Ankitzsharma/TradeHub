const {model} = require("mongoose");

const{HoldingsSchema} = require("../schemas/HoldingsSchemas");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = {HoldingsModel};
