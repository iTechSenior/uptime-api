import { IDocumentStore } from 'ravendb';
import * as indexes from './indexes';

export default {
  name: '2019-07-10-UserIndex',
  up: async (store: IDocumentStore) => {
    await store.executeIndex(new indexes.Users());
  },
  down: async (store: IDocumentStore) => {
    console.log('2019-07-10-UserIndex > down');
  },
};
