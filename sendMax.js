var utils = require('./utils')

module.exports = function sendMax (utxos, outputs, feeRate) {
  if (!isFinite(utils.uintOrNaN(feeRate))) return {}
  var sumInput = utils.sumOrNaN(utxos);
  outputs[0].value = sumInput;
  var bytesAccum = utils.transactionBytes(utxos, outputs)
  var fee = feeRate * bytesAccum
  var outputValue = sumInput - fee;
  outputs[0].value = outputValue;

  return {
    inputs: utxos,
    outputs: outputs,
    fee: fee
  }  
}
