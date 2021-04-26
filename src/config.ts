export default {
  PORT: process.env.PORT || 3000,
  BASE_URL: process.env.BASE_URL || "http://localhost",
  NODE_ENV: process.env.NODE_ENV || "development",
  SESSION_NAME: process.env.SESSION_NAME || "sid",
  SESSION_SECRET: process.env.SESSION_SECRET || "supersIcret",
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  DB_NAME: process.env.DB_NAME || "kinotower"
}