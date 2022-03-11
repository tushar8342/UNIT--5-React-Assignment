import React from "react";


export function GroceryList({data,handleDelete}){
    return(
        <div>
            {data.title}
            
            <button onClick={()=>{handleDelete(data.id)}}>Delete</button>
        </div>
    )
}