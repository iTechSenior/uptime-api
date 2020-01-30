import { IDocumentStore } from 'ravendb';
import * as indexes from './indexes';

export default {
  name: '2019-08-21-EquipmentIndex',
  up: async (store: IDocumentStore) => {
    await store.executeIndex(new indexes.Equipment());
  },
  down: async (store: IDocumentStore) => {
    console.log('2019-08-21-EquipmentIndex > down');
  },
};
