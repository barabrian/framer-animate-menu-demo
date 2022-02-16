const { pascalCase } = require('change-case')
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Prismic slice name (eg. product section)',
    result: (name) => pascalCase(name),
  },
]
