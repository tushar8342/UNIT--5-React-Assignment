import React from "react";
import { useState } from "react";



export function GroceryInput({addGrocery}){
    const [name,setName] = useState("")

    const listedItem = ()=>{
        addGrocery(name)
        setName("")
    }
    return(
        <div>
            <input type="text" placeholder="Add Groceries" 
            onChange={(e)=> setName(e.target.value)} value={name}/>
            <button onClick={listedItem}>Add Grocery</button>
        </div>
    )
}