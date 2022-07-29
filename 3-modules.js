// Common JS, every file in Node is a module (default)
// Modules, encapsulated code (only share minimum)

const names = require("./4-first-module");
const sayHi = require("./5-second-module");
const data = require("./6-alternative-exp");
require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
