const {
  DB_USER = "agtksrlvwcstee",
  DB_PASSWORD = "8dc1b440c8f1ac251a09ae8929893b9b9a99c267cb00ef74ec949b4ddc394b6c",
  DB_NAME = "car",
  DB_HOST = "ec2-52-204-195-41.compute-1.amazonaws.com",
  DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    ssl: true
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    ssl: true
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    ssl: true
  }
}
