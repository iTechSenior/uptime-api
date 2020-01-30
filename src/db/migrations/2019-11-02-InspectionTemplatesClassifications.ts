import { IDocumentStore } from 'ravendb';
import * as indexes from './indexes';

export default {
  name: '2019-11-02-InspectionTemplatesClassifications',
  up: async (store: IDocumentStore) => {
    await store.executeIndex(new indexes.InspectionTemplates_Classifications());
  },
  down: async (store: IDocumentStore) => {
    console.log('2019-11-02-InspectionTemplatesClassifications > down');
  },
};
