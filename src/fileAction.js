const alfy = require("alfy");

// check node version
const majorVersion = Number(process.version.replace("v", "").split(".")[0]);
if (majorVersion < 8) {
  alfy.error(`Wrong Node version. We need v8+, you have ${process.version}`);
  return;
}

const product = require("./product").get();
const query = alfy.input;

// output
console.log(product.binPath + ' "' + query + '"');
