Runtime loaded App Shell & Tools
================================

* Shell webpacked as an application
* Tools webpacked as libraries
* Tools shimmed into the shell

With tools webpacked as libraries, they can be loaded at runtime using any UMD loader. However, they then operate in their own isolated webpack'd world with their own webpack managed dependencies.

Shared scripts can be handled in a similar way to WebPack CDN scripts using WebPack externals configuration.

The tool shims are WebPack dynamic imported. However, dynamic imports are really about loading, not discovery and thus can't dynamically discover resources managed elsewhere.

React
-----

The shell and payments-tool are bundled with React 15.6.1. The accounts-tool is bundled with React 15.0.0. Prior versions of React do not support multiple ```data-reactroot``` attributes on the page. The shell nests the tool within it's DOM hierarchy - so we therefore have React v15.0.0 nested inside React v15.6.1.

Vue
---

A new alerts-tool is introduced which renders from a Vue template nested inside a React DOM.

Quick Start
-----------

```bash
$ npm i http-server -g

$ npm run install
$ npm run build

$ http-server
```
