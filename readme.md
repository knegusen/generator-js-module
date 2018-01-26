# Getting started

## Installation

Install required tools:

```$ npm install -g yo```

Install generator:

```$ npm install -g generator-js-module```

Make a new director, and cd into it:

```$ mkdir name-of-your-app && cd $_```

Run yo wallaby-webpack-react:

```$ yo js-module```

## Usage of generated project

### Production

The module is built using babel.

  ```npm build```

### Testing

You can test both using npm (jest) and wallabyJS. 

#### Using node

Run single run for tests:

```$ npm test```

#### Using wallaby

Download plugin from [wallaby.js](http://www.wallabyjs.com) and add to one of the supported IDEAS.
The wallaby config file is tested ad verified in IntelliJ and Webstorm.

Please check [wallaby.js](http://www.wallabyjs.com) for more information about the awesome test framework.
