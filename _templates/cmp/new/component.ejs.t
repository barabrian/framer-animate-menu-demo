---
to: src/components/<%=name%>/<%=name%>.tsx
---
import { I<%=name%>Props } from './types'

export const <%=name%> = ({ title }: I<%=name%>Props) => (
  <div>{title}</div>
)

export default <%=name%>
