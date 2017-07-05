Runtime loaded App Shell & Tools
================================

* Shell webpacked as an application
* Tools webpacked as libraries
* Tools shimmed into the shell

With tools webpacked as libraries, they can be loaded at runtime using any UMD loader. However, they then operate in their own isolated webpack'd world with their own webpack managed dependencies.

Shared scripts can be handled in a similar way to WebPack CDN scripts using WebPack externals configuration.

The tool shims are WebPack dynamic imported. However, dynamic imports are really about loading, not discovery and thus can't dynamically discover resources managed elsewhere.

Quick Start
-----------

```bash
$ npm i http-server -g

$ npm run install
$ npm run build

$ http-server
```
