import {sql} from '@vercel/postgres';
export async function PUT(req, res){
    const url = new URL(req.url);
    // get params out.
    await sql`INSERT INTO events `
}