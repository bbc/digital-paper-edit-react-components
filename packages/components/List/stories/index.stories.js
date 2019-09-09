import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';
import SearchBar from '../SearchBar';

import { item, cardActions } from '../../SimpleCard/stories/index.stories.js';
import { transcriptItems } from '../../TranscriptCard/stories/index.stories.js';

export const searchActions = actions({ handleSearch: 'Handle search' });

export const items = [ {
  ...item,
  id: '1234',
  key: 'abc123',
  title: 'Sample Simple Card Title One',
  description: 'This is a sample card description. This is fun!',
  display: true,
}, { ...item,
  id: '5678',
  key: 'def456',
  title: 'Sample Simple Card Title Two',
  description: 'This is a sample card description. This is fun!',
  display: true,
  url: '/projects/1/transcripts/5678'
} ];

export const transItems = transcriptItems;

storiesOf('List', module)
  .addDecorator(StoryRouter())
  .add('Simple Cards', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <List
          projectItems={ items }
          { ...cardActions }
          { ...searchActions }
        />
      </section>
    );
  })
  .add('Transcript Cards', () =>
    <section style={ { height: '100%', overflow: 'scroll' } }>
      <List
        projectItems={ transItems }
        { ...cardActions }
        { ...searchActions }
      />
    </section>
  );

storiesOf('List/Search Bar', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <SearchBar
          { ...searchActions }
        />
      </section>
    );
  });