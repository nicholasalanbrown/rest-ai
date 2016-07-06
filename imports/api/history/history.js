import { Mongo } from 'meteor/mongo';

class HistoryCollection extends Mongo.Collection {
}

export const History = new HistoryCollection('History');
