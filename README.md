# FileMIME
FileMIME is a simple node module for interpreting MIME types from filenames.

#Installation
```
npm install filemime
```

#Usage
Using FileMIME is really simple.  Just require the module and provide a filename to the `parse` function like this:
```
var filemime = require('filemime');

var mimeType = filemime.parse('test.js'); //mimeType == 'application/x-javascript'
```

##Acknowledgement
FileMIME is made with love by [Michael Hamilton](http://github.com/michael-hamilton)
