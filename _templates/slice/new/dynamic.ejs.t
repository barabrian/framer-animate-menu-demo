---
to: src/Slices/index.tsx
inject: true
after: >-
  // hygen: dynamic
skip_if: const <%=name%>Slice = dynamic
---
const <%=name%>Slice = dynamic(() => import('./<%=name%>Slice/<%=name%>Slice'))