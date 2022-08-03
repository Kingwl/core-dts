# core-dts

TypeScript will support all proposals above stage-3.  
But there are always some gap between TypeScript support and proposal progress.  
And sometimes we want to use proposals within stage-3 (e.g. `Iterator helper`) because we may use polyfill.  

In this case, we have to write those declarations by our own.
But with `core-dts`, we can use these proposal with additional declaration files.

## Install

```
pnpm add core-dts -D
```

## Setup
Set add `core-dts` into `types` in `compiler options`.

```json
{
  "compilerOptions": {
    "types": ["core-dts"]
  }
}
```

## Proposals
Default proposals are above `stage-3`. If you want to use something like `stage-2` proposal.

```json
{
  "compilerOptions": {
    "types": ["core-dts/src/proposals/stage-2"]
  }
}
```

Or you want to use some specific proposal.

```json
{
  "compilerOptions": {
    "types": ["core-dts/src/proposals/stage-2/iterator-helper.d.ts"]
  }
}
```

## Features
- [x] Finished proposals
    - [x] `Array` find from last
- [x] Stage 3 proposals
    - [x] `Array` grouping
    - [x] Change `Array` by copy
- [x] Stage 2 proposals
    - [x] `Iterator` helpers
    - [x] New `Set` methods
    - [x] `Map.prototype.emplace`
    - [x] `Array.fromAsync`
    - [x] `Array.isTemplateObject`
    - [x] `Symbol.{ asyncDispose, dispose }` for `using` statement
    - [x] `Symbol.metadataKey` for decorators metadata proposal
- [ ] Stage 1 proposals
    - [x] `Observable`
    - [ ] New collections methods
    - [ ] `.of` and `.from` methods on collection constructors
    - [ ] `compositeKey` and `compositeSymbol`
    - [x] `Array` filtering
    - [x] `Array` deduplication
    - [x] Getting last item from `Array`
    - [x] `Number.range`
    - [x] `Number.fromString`
    - [ ] `Math` extensions
    - [ ] `Math.signbit`
    - [ ] `String.cooked`
    - [ ] `String.prototype.codePoints`
    - [ ] `Symbol.matcher` for pattern matching
- [ ] Stage 0 proposals
    - [ ] `Function.prototype.unThis`
    - [ ] `Function.{ isCallable, isConstructor }`
    - [ ] `URL`
- [ ] Pre-stage 0 proposals
    - [ ] `Reflect` metadata
