# Convert HTML to Angular Template Array

It's annoying to write template html like this for every Angular components:

```
return {
  template: [
    '<div class="row">',
      '<div class="small-12 columns">',
        'Hello world!',
      '</div>',
    '</div>'
  ].join('')
}
```

With this module, write plain html, and convert it to a Angular template array.


To use:
```
$ html2nga.js <source html> <output directory>
```

If no output directory is provided, then it writes to the current directory with a randomly generated filename.

This project is still very early, so it is still basic in terms of features and user experience.