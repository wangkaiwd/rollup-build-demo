## build with typescript

* [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)
  * [ts declaration file](https://github.com/ezolenko/rollup-plugin-typescript2#declarations)
* [publish](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
* [module resolution strategies](https://www.typescriptlang.org/docs/handbook/module-resolution.html#module-resolution-strategies)

### webpack

* [author library]()

### build steps

#### Feature

* support typescript
* generate different format bundle

#### Install

1. Run this in your terminal:

```shell
npm i typescript rollup rollup-plugin-typescript2 tslib -D
```

2. Ensure your `package.json` contains these values(and replace `my-lib` part):

```json
{
  "main": "build/my-lib.cjs.js",
  "module": "build/my-lib.es.js",
  "types": "build/my-lib/types/index.d.ts",
  "scripts": {
    "build": "rollup -c rollup.config.ts"
  }
}
```

3. Create `rollup.config.ts` under project root directory

```typescript
import typescript from "rollup-plugin-typescript2";

const pkg = require("./package.json");

export default {
  input: `lib/index.ts`,
  output: [
    {
      file: pkg.main,
      exports: "auto",
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    },
    {
      file: "build/axios.browser.js",
      name: "axios",
      format: "iife"
    }
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true })]
};
```

4. Ensure your `tsconfig.json` contain these values:

```json
{
  "target": "ES5",
  "declaration": true,
  "declarationDir": "build/types",
  "moduleResolution": "Node"
}
```

5. All done! Now execute `npm run build` in your terminal:

```shell
npm run build
```

