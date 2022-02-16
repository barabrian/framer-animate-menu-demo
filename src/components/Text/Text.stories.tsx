import React from 'react'

import { Story, Meta } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  component: Text,
  title: 'Components/Text',
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {}
