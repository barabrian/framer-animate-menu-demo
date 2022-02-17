---
inject: true
to: src/slices/index.tsx
after: |-
  // hygen: slicemap
skip_if: <%=name%>Slice {...props}
---
  <%=h.changeCase.snakeCase(name)%>: (props) => <<%=name%>Slice {...props} />,