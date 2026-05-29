[**@zip.js/zip.js**](../README.md)

***

[@zip.js/zip.js](../globals.md) / SplitDataWriter

# Class: SplitDataWriter

Defined in: [index.d.ts:634](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L634)

Represents a [Writer](Writer.md)  instance used to retrieve the written data from a generator of [WritableWriter](../interfaces/WritableWriter.md)  instances  (i.e. split zip files).

## Implements

- [`Initializable`](../interfaces/Initializable.md)
- [`WritableWriter`](../interfaces/WritableWriter.md)

## Constructors

### Constructor

> **new SplitDataWriter**(`writerGenerator`, `maxSize?`): `SplitDataWriter`

Defined in: [index.d.ts:649](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L649)

Creates the SplitDataWriter instance

#### Parameters

##### writerGenerator

`AsyncGenerator`\<`WritableStream`\<`any`\> \| [`WritableWriter`](../interfaces/WritableWriter.md) \| [`Writer`](Writer.md)\<`unknown`\>, `boolean`\>

A generator of Writer instances.

##### maxSize?

`number`

The maximum size of the data written into [Writer](Writer.md) instances (default: 4GB).

#### Returns

`SplitDataWriter`

## Properties

### writable

> **writable**: `WritableStream`

Defined in: [index.d.ts:638](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L638)

The `WritableStream` instance.

#### Implementation of

[`WritableWriter`](../interfaces/WritableWriter.md).[`writable`](../interfaces/WritableWriter.md#writable)

## Methods

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [index.d.ts:642](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L642)

Initializes the instance asynchronously

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Initializable`](../interfaces/Initializable.md).[`init`](../interfaces/Initializable.md#init)
