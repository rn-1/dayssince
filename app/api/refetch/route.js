// import { resetTimeElapsed } from "@/app/util/data";

import {sql} from "@vercel/postgres";

export async function POST(req, res) {
    // console.log(req);
    const url = new URL(req.url);
    const name = url.searchParams.get('name');
    console.log(name);
    try {
        let time = Date.now();
        await sql`
        UPDATE events
        SET date = CAST(${time} AS varchar)
        WHERE name = ${name};`;
        console.log("time reset successfully");
        return Response.json({message:"reset success", status:200});
    } catch (error) {
        console.error("Database failure:", error);
        return Response.json({message:"failure", status:500})
    }
}