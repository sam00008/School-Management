import { db } from "../config/db.js";


const schoolSchema = async () => {
    try {
        await db.execute(`
            create table if not exists schools(
              id int auto_increment PRIMARY KEY,
              name VARCHAR(255) not null,
              address VARCHAR(255) not null,
              latitude DECIMAL(10,8) not null,
              longitude DECIMAL(11,8) not null
            );
            `);

            console.log("School table created successfully");
            
    } catch (error) {
        console.error("Error while creating table : ", error.message);
    }
};

const add = async({ name, address, latitude, longitude }) => {
    const query = `
     INSERT INTO schools (name,address,latitude,longitude)
     VALUES(?, ?, ?, ?)
    `;

    const values = [ name, address, Number(latitude), Number(longitude)];
    
    const [result] = await db.execute(query,values);
   
    return {
        id : result.insertId,
        name,
        address,
        latitude,
        longitude, 
    };
};

const getAllSchools = async () => {
    const [result] = await db.execute("SELECT * from schools");
    return result;
}

export { 
    schoolSchema,
    add,
    getAllSchools,
 };
