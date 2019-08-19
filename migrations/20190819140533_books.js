exports.up = function(knex, Promise) {
  return knex.schema.createTable("", function(table) {
    table.increments("id").primary;
    table.string("title");
    table.string("author");
    table.integer("publication_date");
    table.string("genre");
    table.string("desciption");
    table.string("translator");
    table.string("quote");
    table.string("pages");
    table.string("country");
    table.string("language");
    table.string("followed_by");
    table.string("publisher");
    table.string("image");
    table.boolean("read");
    table.boolean("reading");
    table.boolean("want_to_read");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
