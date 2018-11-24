// const bookshelf = require('./bookshelf');

// class Card extends bookshelf.Model {
//   get tableName() { return 'kanban_cards' }
//   get hasTimestamps() { return true; }

//   priority_id() {
//     return this.belongsTo('priorities', 'id')
//   }
//   status_id() {
//     return this.belongsTo('statuses', 'id')
//   }
//   created_by() {
//     return this.belongsTo('users', 'id')
//   }
//   assigned_to() {
//     return this.belongsTo('users', 'id')
//   }

// }

// module.exports = bookshelf.model('Card', Card)

const bookshelf = require('./bookshelf');
require('./Priorities');
require('./Statuses');
require('./Users');
class Card extends bookshelf.Model {
  get tableName() {
    return 'kanban_cards';
  }
  get hasTimestamps() {
    return true;
  }

  creator() {
    return this.belongsTo('User', 'created_by');
  }

  assignee() {
    return this.belongsTo('User', 'assigned_to');
  }

  status() {
    return this.belongsTo('Statuses', 'status_id');
  }
  priority() {
    return this.belongsTo('Priorities', 'priority_id');
  }
}
// new Card({priority_id:2}).related('priorities').fetch().then(priority_id)

module.exports = bookshelf.model('Card', Card);