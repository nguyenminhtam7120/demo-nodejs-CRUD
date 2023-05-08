module.exports = {
  HOST: "TAM-BSP", // db server host
  USER: "sa", // username
  PASSWORD: "admin123", // password
  DB: "graphpl", // db name
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};