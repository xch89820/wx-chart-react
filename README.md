# wx-chart-react
[![NPM version][npm-version-image]][npm-url]
[![MIT License][license-image]][license-url]

A react adapter for wx-chart

## Usage

### Install

Use NPM:
```
npm i wx-chart-react --save
```

Use Bower:
```
bower install wx-chart-react
```

### Simple Use with react

```
import React from 'react';
import ReactDOM from 'react-dom';
import WxLinerReact from 'wx-chart-react';

// initialization
let options = {...};
const myChart = ReactDOM.render(<WxLinerReact {...options}></WxLinerReact>, 'myCanvas');
```

More options, please see [wx-chart](https://github.com/xch89820/wx-chart) documents

#### Special options

##### tooltipEvent

  Set the event type fnor tooltip's component, default is `mousemove`

## License

[MIT license](http://opensource.org/licenses/MIT)

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: http://opensource.org/licenses/MIT

[npm-url]: https://www.npmjs.com/package/wx-chart-react
[npm-version-image]: http://img.shields.io/npm/v/wx-chart-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/wx-chart-react.svg?style=flat
