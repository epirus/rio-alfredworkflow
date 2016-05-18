"use strict";

const noop = require("noop6")
    , sliced = require("sliced")
    ;

/**
 * assured
 * Proxies the callback function.
 *
 * @name assured
 * @function
 * @param {Function} fn The callback function to proxy.
 * @param {Promise} p A custom promise constructor (default: the built-in `Promise`).
 * @returns {Function} The proxied callback function extended with:
 *
 *  - `resolver` (Function): The promise resolver.
 *  - `assuredResolve` (Function): The resolve method.
 *  - `assuredReject` (Function): The reject method.
 *  - `_` (Promise): The promise object (used to `return` from your function).
 *
 */
module.exports = function assured (fn, p) {
    p = p || Promise;
    fn = fn || noop;

    let res = function (err) {
        if (err) {
            fn(err);
            res.assuredReject(err);
        } else {
            fn.apply(res, arguments);
            res.assuredResolve.apply(res, sliced(arguments, 1));
        }
        return res._;
    };

    res.resolver = function (resolve, reject) {
        res.assuredResolve = resolve;
        res.assuredReject = reject;
    };

    res._ = new p(res.resolver);
    return res;
};
