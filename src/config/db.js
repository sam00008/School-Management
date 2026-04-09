import mysql from "mysql2/promise";

let db;

const connetDB = async () => {
  try {
  db = await mysql.createConnection(process.env.DATBASE_URL);

    console.log("MySQL Connected Successfully");
    //console.log( await db.execute("show databases"));
    return db;

  } catch (error) {
    console.error("MySQL connection error" , error.message);
    throw error;
  }
};

export { connetDB, db };
