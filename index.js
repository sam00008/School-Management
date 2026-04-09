import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { app } from "./app.js";
import { connetDB } from "./src/config/db.js";
import { schoolSchema } from "./src/model/school.model.js";


const port = process.env.PORT;

const startServer = async () =>{
    try {
        await connetDB();
        await schoolSchema();
        
        console.log("My Sql Connected successfully");

        app.listen(port, () => {
            console.log(`Serever is running at http://localhost:${port}`)
        })

    } catch (error) {
        console.error("My Sql connection failed", error.message);
    }
};

startServer();
