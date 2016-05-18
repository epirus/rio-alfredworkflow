
# noop6 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/noop6.svg)](https://www.npmjs.com/package/noop6) [![Downloads](https://img.shields.io/npm/dt/noop6.svg)](https://www.npmjs.com/package/noop6) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> No operation as a module using an arrow function.

## :cloud: Installation

```sh
$ npm i --save noop6
```


## :clipboard: Example



```js
const noop = require("noop6");

noop();
// Nothing happened, yay!

let square = (x, cb) => {
    cb = cb || noop;
    cb(x * x);
};

square(42, r => {
    console.log(r);
    // => 1764
});

// No error, even we don't send the callback function
square(42);
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`custom-return`](https://github.com/IonicaBizau/custom-return#readme)—Generate a function that returns a constant.
 - [`nodeice`](https://github.com/IonicaBizau/nodeice)—Another PDF invoice generator
 - [`tithe`](https://github.com/IonicaBizau/tithe)—Organize and track the tithe payments.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
