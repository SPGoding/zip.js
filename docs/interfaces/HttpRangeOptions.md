[**@zip.js/zip.js**](../README.md)

***

[@zip.js/zip.js](../globals.md) / HttpRangeOptions

# Interface: HttpRangeOptions

Defined in: [index.d.ts:496](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L496)

Represents options passed to the constructor of [HttpRangeReader](../classes/HttpRangeReader.md) and [HttpReader](../classes/HttpReader.md).

## Extended by

- [`HttpOptions`](HttpOptions.md)

## Properties

### customFetch?

> `optional` **customFetch?**: (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [index.d.ts:502](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L502)

A custom `fetch` function to use for making HTTP requests. Ignored if `useXHR` is set to `true`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`RequestInfo` \| `URL`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Default Value

```ts
globalThis.fetch
```

***

### headers?

> `optional` **headers?**: `Iterable`\<\[`string`, `string`\], `any`, `any`\> \| `Map`\<`string`, `string`\>

Defined in: [index.d.ts:512](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L512)

The HTTP headers.

***

### useXHR?

> `optional` **useXHR?**: `boolean`

Defined in: [index.d.ts:508](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L508)

`true` to rely `XMLHttpRequest` instead of `fetch` to fetch data.

#### Default Value

```ts
false
```
