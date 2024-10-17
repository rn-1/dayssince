'use server';

import { sql } from '@vercel/postgres';


export default async function fetchEvents(userid){
    try{
        const data = await sql`SELECT * FROM events WHERE user_id = ${userid}`;
        console.log("successfully fetched events");
        return data;
    } catch(error){
        console.error("database failure!");
        throw new Error("couldn't fetch events from db: " + error);
    }
}


export async function resetTimeElapsed(eventname){
    // console.log("lolol");
    try {
        let time = Date.now();
        await sql`
        UPDATE events
        SET date = CAST(${time} AS varchar)
        WHERE name = ${eventname};`;
        console.log("time reset successfully");
    } catch (error) {
        console.error("database failure!")
        throw new Error("couldn't reset data: " + error);
    }
}

// export async function seedDB(){
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`CREATE TABLE IF NOT EXISTS users(
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         password TEXT NOT NULL
//     );`;
//     await client.sql`CREATE TABLE IF NOT EXISTS events(
//         id UUID,
//         name VARCHAR(255) NOT NULL,
//         date VARCHAR(255) NOT NULL
//     );`;
// }

// export async function insertTestData(){
//     var j = await client.sql`ALTER TABLE
//     ADD eventid UUID DEFAULT uuid_generate_v4() PRIMARY KEY;`
//     // var lol = await client.sql`INSERT INTO users (id, name, password)
//     // VALUES ('410544b2-4001-4271-9855-fec4b6a6442a', 'Josh', 'password123');`;
//     var lol = await client.sql`INSERT INTO events (id, name, date)
//     VALUES ('410544b2-4001-4271-9855-fec4b6a6442a', 'Laundry', '03082019');`;
// }