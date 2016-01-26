# Convert HTML to Angular Template Array

It's annoying to write template code like this:

`
return {
  template: [
    '<div class="row">',
      '<div class="small-12 columns">',
        'Hello world!',
      '</div>',
    '</div>'
  ].join('')
}
`

Write plain html, and convert it to a Angular template array.
