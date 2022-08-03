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
- [x] Stage 1 proposals
    - [x] `Observable`
    - [x] New collections methods
    - [x] `.of` and `.from` methods on collection constructors
    - [x] `compositeKey` and `compositeSymbol`
    - [x] `Array` filtering
    - [x] `Array` deduplication
    - [x] Getting last item from `Array`
    - [x] `Number.range`
    - [x] `Number.fromString`
    - [x] `Math` extensions
    - [x] `Math.signbit`
    - [x] `String.cooked`
    - [x] `String.prototype.codePoints`
    - [x] `Symbol.matcher` for pattern matching
- [x] Stage 0 proposals
    - [x] `Function.prototype.unThis`
    - [x] `Function.{ isCallable, isConstructor }`

