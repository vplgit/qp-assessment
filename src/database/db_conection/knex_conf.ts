export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./groceries_db.sqlite3",
    },
    useNullableDefault: true,
  },
};
