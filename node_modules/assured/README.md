
# assured

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/assured.svg)](https://www.npmjs.com/package/assured) [![Downloads](https://img.shields.io/npm/dt/assured.svg)](https://www.npmjs.com/package/assured) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Combine promises and callbacks together.

## :cloud: Installation

```sh
$ npm i --save assured
```


## :clipboard: Example



```js
const assured = require("assured");

let foo = (age, cb) => {

    // Swap the callback function
    if (typeof age === "function") {
        cb = age;
    }

    // Proxy the callback function
    cb = assured(cb);

    // Validate the age
    if (typeof age !== "number") {
        return cb(new Error("Invalid age."));
    }

    // Do something async
    setTimeout(() => {
        cb(null, `The provided age is ${age}`);
    }, 100);

    // Return the promise
    return cb._;
}

// Callback interface + error
foo(err => console.log(err));
// => [Error: Invalid age.]

// Callback interface + success
foo(42, (err, data) => console.log(err, data));
// => null 'The provided age is 42'

// Promise interface + error
foo().then(x => {
    console.log("Success: ", x);
}).catch(e => {
    console.log("Error: ", e);
    // => Error:  [Error: Invalid age.]
});

// Promise + Success
foo(42).then(x => {
    console.log("Success: ", x);
}).catch(e => {
    console.log("Error: ", e);
});
```

## :memo: Documentation


### `assured(fn, p)`
Proxies the callback function.

#### Params
- **Function** `fn`: The callback function to proxy.
- **Promise** `p`: A custom promise constructor (default: the built-in `Promise`).

#### Return
- **Function** The proxied callback function extended with:
 - `resolver` (Function): The promise resolver.
 - `assuredResolve` (Function): The resolve method.
 - `assuredReject` (Function): The reject method.
 - `_` (Promise): The promise object (used to `return` from your function).



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`scrape-it`](https://github.com/IonicaBizau/scrape-it#readme)—A Node.js scraper for humans.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
