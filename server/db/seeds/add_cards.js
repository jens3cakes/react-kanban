
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kanban').del()
    .then(function () {
      // Inserts seed entries
      return knex('kanban').insert([
        {name: 'Jennifer', task: 'Give dogs a bath', status: 'In queque', type:'parent'},
        {name: 'Bert', task: 'Wash clothes', status: 'In progress', type:'parent'},
        {name: 'Lauren', task: 'Unload dishwasher', status: 'In queque', type:'child'},
        {name: 'Joshua', task: 'Load dishwasher', status: 'In progress', type:'child'},
        {name: 'Mitchell', task: 'Feed dogs', status: 'Done', type:'child'},
        {name: 'Bert', task: 'Cook dinner', status: 'Done', type:'parent'},
        {name: 'Lauren', task: 'Clean room', status: 'In progress', type:'child'},
      ]);
    });
};
