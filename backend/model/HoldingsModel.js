const {model} =  require ("mongoose");
const {HoldingsSchema} =require ("../schema/HoldingsSchema");
const HoldingsModel =  new model("handling",HoldingsSchema);
module.exports = {HoldingsModel};