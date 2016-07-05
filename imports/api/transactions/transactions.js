import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class TransactionsCollection extends Mongo.Collection {
}

export const Transactions = new TransactionsCollection('Transactions');

/*

Todos.schema = new SimpleSchema({
  listId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  text: {
    type: String,
    max: 100,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  },
  checked: {
    type: Boolean,
    defaultValue: false,
  },
});

Todos.attachSchema(Todos.schema);

*/
