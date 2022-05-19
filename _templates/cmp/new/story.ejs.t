---
to: src/components/<%=name%>/<%=name%>.stories.tsx
---
import React from 'react'

import { Story, Meta } from '@storybook/react'

import { <%=name%> } from './<%=name%>'
import { I<%=name%>Props } from './types'

export default {
  component: <%=name%>,
  title: 'Components/<%=name%>',
} as Meta

const Template: Story<I<%=name%>Props> = (args) => <<%=name%> {...args} />

export const Default = Template.bind({})

Default.args = {}
