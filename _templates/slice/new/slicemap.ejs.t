---
inject: true
to: src/Slices/index.tsx
after: |-
  // hygen: slicemap
skip_if: <%=name%>Slice {...props}
---
  <%=h.changeCase.snakeCase(name)%>: (props) => <<%=name%>Slice {...props} />,