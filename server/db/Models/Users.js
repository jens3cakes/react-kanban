const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {

  get tableName() {return 'users'}
  get hasTimestamps() {return true}

  cards() {
    return this.hasMany('Card', 'users_id')
  }
  
}

module.exports = bookshelf.model ('User', User)