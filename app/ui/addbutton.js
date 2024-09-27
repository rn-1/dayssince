'use client';

export default function AddButton(){
    return(
        <div className="items-center jutify-center drop-shadow-lg">
            <button onClick={() => console.log("button pressed")}>
                <div className="rounded bg-gray-100 w-fit h-fit pl-5 pr-5">
                    <p>Add Item</p>
                </div>
            </button>
        </div>
    );
}