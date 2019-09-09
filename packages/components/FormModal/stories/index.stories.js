import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import FormModal from '../index.js';
import ItemForm from '../ItemForm';

export const modalItems = [ {
  id: 1,
  showModal: true,
  title: 'Example Transcript Title',
  description: 'This is a sample card description. This is fun!',
  url: '/projects/1/transcripts/1234',
  modalTitle: 'Edit Project',
}, {
  showModal: true,
  modalTitle: 'New Project',
  id: 2
} ];

export const modalActions = actions({ handleSaveForm: 'Form saved' });

storiesOf('Form Modal', module)
  .addDecorator(StoryRouter())
  .add('Edit project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
          { ...modalActions }
          { ...modalItems[0] }
        />
      </section>
    );
  })
  .add('New project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
          { ...modalActions }
          { ...modalItems[1] }
        />
      </section>
    );
  });

storiesOf('Form Modal / Item Form', module)
  .addDecorator(StoryRouter())
  .add('Edit Project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <ItemForm
          { ...modalActions }
          { ...modalItems[0] }
        />
      </section>
    );
  });
