[**@zip.js/zip.js**](../README.md)

***

[@zip.js/zip.js](../globals.md) / WritableWriter

# Interface: WritableWriter

Defined in: [index.d.ts:518](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L518)

Represents an instance used to write data into a `WritableStream` instance.

## Properties

### maxSize?

> `optional` **maxSize?**: `number`

Defined in: [index.d.ts:526](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L526)

The maximum size of split data when creating a [ZipWriter](../classes/ZipWriter.md) instance or when calling [FileEntry#getData](FileEntry.md#getdata) with a generator of WritableWriter instances.

***

### writable

> **writable**: `WritableStream`

Defined in: [index.d.ts:522](https://github.com/gildas-lormeau/zip.js/blob/060c9ba5b08648b8d2ac207905efc63733cd9263/index.d.ts#L522)

The `WritableStream` instance.
