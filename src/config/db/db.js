import mysql from "mysql";

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "sirenjournals",
});

export default db;
