---
inject: true
to: src/components/index.ts
append: true
skip_if: from './<%= name %>'
---
export { <%= name %> } from './<%= name %>'