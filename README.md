# css-modulesify-grunt
Minimum sample repo to show css-modulesify not working with Grunt. I believe that the issue is with Grunt running synchronously, while the final file writes in css-modulesify [here](https://github.com/css-modules/css-modulesify/blob/master/index.js#L221) write asynchronously.

## Usage
`npm install` and `grunt browserify` should do the trick. It generates `bundle.js` and `output.css` - note that `output.css` is empty.
