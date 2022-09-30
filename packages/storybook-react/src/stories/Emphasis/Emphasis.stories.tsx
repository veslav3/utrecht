import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Emphasis, Paragraph } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Emphasis',
  id: 'react-document',
  component: Emphasis,
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} as ComponentMeta<typeof Emphasis>;

const Template: ComponentStory<typeof Emphasis> = (args) => <Emphasis {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello, World!',
};