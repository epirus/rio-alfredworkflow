# regex-escape [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/regex-escape.svg)](https://www.npmjs.com/package/regex-escape) [![Downloads](https://img.shields.io/npm/dt/regex-escape.svg)](https://www.npmjs.com/package/regex-escape) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Escapes input characters to be used in regular expressions.

## Installation

```sh
$ npm i --save regex-escape
```

## Example

```js
// Dependencies
var RegexEscape = require("regex-escape");

console.log(RegexEscape("{#/}"));
// => \{#\/\}
```

## Documentation

### `RegexEscape(input)`
Escapes a string for using it in a regular expression.

#### Params
- **String** `input`: The string that must be escaped.

#### Return
- **String** The escaped string.

### `proto()`
Adds the `RegexEscape` function to `RegExp` class.

#### Return
- **Function** The `RegexEscape` function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Thanks
Big thanks to [CoolAj86](http://stackoverflow.com/users/151312/coolaj86) for posting [this answer](http://stackoverflow.com/a/6969486/1420197). This library uses the black magic regex from that answer. :sparkles:

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`barbe`](https://github.com/IonicaBizau/node-barbe)

 - [`camelo`](https://github.com/IonicaBizau/camelo#readme)

 - [`doodle-data`](https://github.com/regular/doodle-data#readme) by Jan Bölsche

 - [`engine-flow-types`](https://github.com/jillix/engine-flow-types#readme) by jillix

 - [`luhnify`](https://github.com/koopero/luhnify#readme) by Samm Cooper

 - [`parse-it`](https://github.com/IonicaBizau/parse-it#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md