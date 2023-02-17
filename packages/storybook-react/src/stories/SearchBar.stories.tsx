import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '@utrecht/component-library-react/dist/css-module/index';
import tokensDefinition from '@utrecht/components/search-bar/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const languages = [
  {
    title: '1970s',
    list: [
      {
        name: 'C',
        year: 1972,
      },
    ],
  },
  {
    title: '1980s',
    list: [
      {
        name: 'C++',
        year: 1983,
      },
      {
        name: 'Perl',
        year: 1987,
      },
    ],
  },
  {
    title: '1990s',
    list: [
      {
        name: 'Haskell',
        year: 1990,
      },
      {
        name: 'Python',
        year: 1991,
      },
      {
        name: 'Java',
        year: 1995,
      },
      {
        name: 'Javascript',
        year: 1995,
      },
      {
        name: 'PHP',
        year: 1995,
      },
      {
        name: 'Ruby',
        year: 1995,
      },
    ],
  },
  {
    title: '2000s',
    list: [
      {
        name: 'C#',
        year: 2000,
      },
      {
        name: 'Scala',
        year: 2003,
      },
      {
        name: 'Clojure',
        year: 2007,
      },
      {
        name: 'Go',
        year: 2009,
      },
    ],
  },
  {
    title: '2010s',
    list: [
      {
        name: 'Elm',
        year: 2012,
      },
    ],
  },
];
const itemToString = (item: any) => {
  return item ? item.name : '';
};

const meta: Meta<typeof SearchBar> = {
  title: 'React Component/SearchBar',
  id: 'react-search-bar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-search-bar',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component:
          '`SearchBar`  This component extends the [Downshift](https://www.npmjs.com/package/downshift#onstatechange) Component Thant means you can use `Downshift` props',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

/**
 * SearchBar
 *  This component extends the [Downshift](https://www.npmjs.com/package/downshift#onstatechange) Component
 *  Thant means you can use `Downshift` props
 */

export const Default: Story = {
  render: () => {
    const [items, setItems] = React.useState(languages);

    function escapeRegexCharacters(str: any) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const getItems = (value: any) => {
      const escapedValue = escapeRegexCharacters(value.trim());

      if (escapedValue === '') {
        return languages;
      }

      const regex = new RegExp('^' + escapedValue, 'i');

      return languages
        .map((list: any) => {
          return {
            title: list.title,
            list: list.list.filter(({ name }: any) => regex.test(name)),
          };
        })
        .filter((list: any) => list.list.length > 0);
    };

    const handleStateChange = (changes: any) => {
      if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {
        setItems(getItems(changes.inputValue));
      }
    };

    const onChange = (selectedItem: any, downshiftState: any) => {
      // handle the new selectedItem here
      console.log(selectedItem);
      console.log(downshiftState);
    };

    return (
      <form role="search" aria-label="zoeken in Utrecht.nl">
        <SearchBar
          button={{
            label: 'Search',
          }}
          onStateChange={handleStateChange}
          onChange={onChange}
          items={items}
          input={{
            ariaLabel: 'Search',
            placeholder: 'Search',
          }}
          itemToString={itemToString}
        />
      </form>
    );
  },
};

export const IsOpen: Story = {
  args: {
    isOpen: true,
    items: languages,
    itemToString,
    button: {
      label: 'Search',
    },
  },
};

export const IsActiveElement: Story = {
  args: {
    isOpen: true,
    items: languages,
    initialHighlightedIndex: 1,
    itemToString,
    button: {
      label: 'Search',
    },
  },
};

export const IsSelectedElement: Story = {
  args: {
    isOpen: true,
    items: languages,
    initialSelectedItem: languages[0].list[0],
    itemToString,
    button: {
      label: 'Search',
    },
  },
};

export const DesignTokens = designTokenStory(meta as any);
