import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Text, TextProps } from './Text'

export default {
  component: Text,
  title: 'Components/Text',
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Example text',
}
