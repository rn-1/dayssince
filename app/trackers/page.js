'use client';

import AddButton from "../ui/addbutton";
import Card from "../ui/card";

export default function Page(){
    return(
        <div className = "flex-col">
            <div className = "bg-blue-500 items-center justify-center h-32 text-center pt-12 text-2xl">
                <h1>Days Since</h1>
            </div>
            <div className = "bg-white items-center justify-center text-center h-screen w-screen text-black">
                <Card/>
                <Card/>
                <AddButton/>
            </div>
        </div>
    )
}