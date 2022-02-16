---
to: src/components/<%=name%>/<%=name%>.stories.tsx
---
import React from 'react'

import { Story, Meta } from '@storybook/react'

import { <%=name%>, <%=name%>Props } from './<%=name%>'

export default {
  component: <%=name%>,
  title: 'Components/<%=name%>',
} as Meta

const Template: Story<<%=name%>Props> = (args) => <<%=name%> {...args} />

export const Default = Template.bind({})

Default.args = {}
