'use server';

import AddButton from "../ui/addbutton";
import Card from "../ui/card";
import fetchEvents from "../util/data";

export default async function Page(){

    const test_id = '410544b2-4001-4271-9855-fec4b6a6442a';
    const data = await fetchEvents(test_id);
    console.log(data.rows);


    return(
        <div className = "flex-col">
            <div className = "bg-blue-500 items-center justify-center h-32 text-center pt-12 text-2xl">
                <h1>Days Since</h1>
            </div>
            <div className = "bg-white items-center justify-center text-center h-screen w-screen text-black">
                {data.rows.map(({user_id, name, date}) => <Card key={user_id} name={name} date={date}/>)}
                <AddButton/>
            </div>
        </div>
    )
}