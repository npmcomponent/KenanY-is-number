*This repository is a mirror of the [component](http://component.io) module [kenany/is-number](http://github.com/kenany/is-number). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kenany-is-number`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# is-number

Lo-Dash's `isNumber` function as a component.

[![browser support](https://ci.testling.com/KenanY/is-number.png)](https://ci.testling.com/KenanY/is-number)

## Installation

``` bash
$ component install KenanY/is-number
```

## API

``` javascript
var isNumber = require('is-number');
```

### isNumber(value)

Checks if `value` is a number.

Note: `NaN` is considered a number. See <http://es5.github.io/#x8.5>.