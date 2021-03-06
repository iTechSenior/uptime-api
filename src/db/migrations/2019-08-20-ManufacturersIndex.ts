import { IDocumentStore } from 'ravendb';
import * as indexes from './indexes';

export default {
  name: '2019-08-20-ManufacturersIndex',
  up: async (store: IDocumentStore) => {
    await store.executeIndex(new indexes.Manufacturers());
  },
  down: async (store: IDocumentStore) => {
    console.log('2019-08-20-ManufacturersIndex > down');
  },
};
