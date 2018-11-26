const bookshelf = require('./bookshelf');

class Priorities extends bookshelf.Model {

  get tableName() { return 'priorities' }
  get hasTimestamps() { return true }

  cards() {
    return this.hasMany('Card', 'priority_id')
  }

}
module.exports = bookshelf.model('Priorities', Priorities)