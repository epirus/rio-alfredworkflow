## Documentation

You can see below the API reference of this module.

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

