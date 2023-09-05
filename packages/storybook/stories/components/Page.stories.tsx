/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Page, PageContent, PageFooter, PageHeader } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/page/README.md?raw';
import tokensDefinition from '@utrecht/components/page/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Page',
  id: 'css-page',
  component: Page,
  argTypes: {
    children: {
      description: 'Page content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-page',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <PageHeader>Header area</PageHeader>,
      <PageContent>
        <main className="utrecht-page-content__main">Content area</main>
      </PageContent>,
      <PageFooter>Footer area</PageFooter>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);