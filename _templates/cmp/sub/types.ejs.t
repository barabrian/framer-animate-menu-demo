---
inject: true
to: src/components/<%=component%>/types.ts
append: true
skip_if: I<%=name%>Props
---
export interface I<%=name%>Props {
  title?: string
}
