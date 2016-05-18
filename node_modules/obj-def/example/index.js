"use strict";

const objDef = require("../lib");

let foo = {
    bar: 42
};

// "bar" will remain unchanged
objDef(foo, "bar", 7);

// "location" will default to "Mars"
objDef(foo, "location", "Mars");

console.log(foo);
// => { bar: 42, location: 'Mars' }
