---
to: src/components/<%=name%>/<%=name%>.tsx
---
export interface I<%=name%>Props {
  title?: string
}

export const <%=name%> = ({ title }: I<%=name%>Props) => (
  <div>{title}</div>
)

export default <%=name%>
