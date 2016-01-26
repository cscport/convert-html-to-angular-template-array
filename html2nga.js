var path = require('path');
var fs   = require('fs');

var filePath    = process.argv[2];
var outputInput = process.argv[3] || "./output-" + RandomString(5) + ".js";
var outputPath  = path.join(__dirname, outputInput);


try {
  convertToJs(filePath, outputPath);
} catch(e) {
  console.log(e);
}

function convertToJs(filePath, outputPath) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }

    writeJS(data, outputPath)
  });
}

function writeJS(data, outputPath) {
  fs.open(outputPath, 'w', function(err, fd) {
    var lines = data.split("\n");
    fs.write(fd, 'template: [\n')
    lines.forEach(function(line, i) {
      fs.write(fd, '  \'' + line + '\',\n')
    });
    fs.write(fd, '].join(\'\')')
    fs.close(fd);
  });
}


function RandomString(length) {
  var sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var sampleLength = sample.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += sample[Math.floor(Math.random() * sampleLength)];
  };

  return result;
}

