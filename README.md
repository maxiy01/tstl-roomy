# TSTL Roomy

Declarations for [roomy](https://github.com/tesselode/roomy), a small screen-management lua module.


| Command | Description |
|-|-|
| `yarn add -D tstl-roomy` | Install these declarations |
| `yarn add tesselode/roomy` | Install roomy |


Upon installation these declarations can be linked to a _tsconfig.json_ file.

```json
{
    "compilerOptions": {
        "types": [
            "tstl-roomy"
        ]
    }
}
```

And used within any _.ts_ file.

```ts
import * as roomy from "roomy"

let manager = roomy.new();

love.load = () => {
    manager.hook();
}
```

Make sure to append `";./node_modules/?/?.lua"` to your `package.path` in a _conf.ts_ file (this is run first) to assist where Lua looks for modules.

```ts
package.path += ";./node_modules/?/?.lua";
```
