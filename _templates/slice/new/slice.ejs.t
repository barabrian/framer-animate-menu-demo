---
to: src/slices/<%=name%>Slice/<%=name%>Slice.tsx
---
export interface <%=name%>SliceProps {
  /**
   * Prismic slice data
   */
  slice: any // add types as required
  /**
   * Data from embeded page usualy static props
   */
  data: any // add types as required
}

export const <%=name%>Slice = ({ slice, data }: <%=name%>SliceProps) => {
  console.log('data', data)
  console.log('slice', slice)
  return <>Slice component</>
}

export default <%=name%>Slice

