const fs = require('fs');
const source = fs.readFileSync('math.wasm');
const typedArray = new Uint8Array(source);

WebAssembly.instantiate(typedArray, {}).then(result => {
  console.log(result.instance.exports.calculate(10,20));
});