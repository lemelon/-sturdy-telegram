exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('sms_outgoing', function(table) {
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('sms_outgoing', function(table) {
      table.timestamps();
    })
  ]);
};
