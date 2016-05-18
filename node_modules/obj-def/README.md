
# obj-def [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/obj-def.svg)](https://www.npmjs.com/package/obj-def) [![Downloads](https://img.shields.io/npm/dt/obj-def.svg)](https://www.npmjs.com/package/obj-def) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Easily set default fields in objects.

## :cloud: Installation

```sh
$ npm i --save obj-def
```


## :clipboard: Example



```js
const objDef = require("obj-def");

let foo = {
    bar: 42
};

// "bar" will remain unchanged
objDef(foo, "bar", 7);

// "location" will default to "Mars"
objDef(foo, "location", "Mars");

console.log(foo);
// => { bar: 42, location: 'Mars' }
```

## :memo: Documentation


### `objDef(obj, field, defValue, opts)`
Easily set default fields in objects.

#### Params
- **Object** `obj`: The input object.
- **String** `field`: The field name.
- **Anything** `defValue`: The default value.
- **Object** `opts`: The `deffy` options.

#### Return
- **Anything** The set value.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
