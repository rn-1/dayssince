'use client';

export default function AddButton(userid){ // we actually need user id in this component to make this work
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