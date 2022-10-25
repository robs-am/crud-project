import mysql from "mysql"

export const bancoDeDados = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password:"willdev123",
    database: "crud"
});