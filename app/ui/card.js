'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import timeElapsed, { resolveDisplay } from "../util/time";
// import { refetchDate, resetTimeElapsed } from "../util/data";
// import { resolve } from "path";

export const dynamic = 'force-dynamic';

export default function Card({name, date}){


    // console.log(date);
    // let displayDate = timeElapsed(date); // update in real time?
    const [displayDate, setDate] = useState(timeElapsed(date));
    const [_date, setDObj] = useState(date);

    //TODO SUSPENSE??? USE IT WELL. later get an mvp rolling first.

    async function resetHandler(){
        try {
            await fetch(`/api/refetch?name=${encodeURIComponent(name)}`, {method: 'POST',}); // this also requires api endpoint
            console.log("resetting date...");
            // if (!dateResponse.ok) {
            //   throw new Error('Network response was not ok during date fetch');
            // }
            // const result = await dateResponse.json();
            // date = result;
            // console.log(Date.now());
            setDObj(_date => Date.now());
            setDate(displayDate => timeElapsed(_date));

        } catch (error) {
            console.error("Error resetting time:", error);
            // Handle error (e.g., show a notification)
        }
    }

    useEffect(() => 
    {
        // console.log(_date);
        const interval = setInterval(() => {
            setDate(displayDate => timeElapsed(_date));
        }, 
        1000); // Update every second
        return () => clearInterval(interval);
    }
    ,[_date])

    // we will need some logic 

    return (
    <div className="justify-center p-5 bg-transparent">
        <div className="bg-gray-100 rounded-xl flex drop-shadow-md h-40 p-5 items-center">
            <div className = "rounded-md bg-blue-400 flex-wrap text-3xl p-5 justify-center items-center text-white">
                <h1>{resolveDisplay(displayDate)}</h1>
            </div> 
            <div className = "pb-12 pt-12 pl-5 pr-5 text-xl">
                <h1>{name}</h1>
            </div>
            <button onClick={resetHandler}>
                <div className="justify-left bg-gray-300 drop-shadow-md rounded-md pl-5 pr-5">
                    <p>RESET</p>
                </div>
            </button>
        </div>
    </div>);
}