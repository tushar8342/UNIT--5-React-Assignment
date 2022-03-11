import React from "react";
import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from 'nanoid'

export function Grocery(){
    const [data,setData] = useState([])

    const addGrocery = (elem) => {
        const item = {
            title : elem,
            id : nanoid()
        }
        setData([...data,item])
    }


    const handleDelete = (id) => {
        const del = data.filter((ele)=> { return ele.id !== id})
        setData(del)
    }
    
    return(
        <div>
            <GroceryInput addGrocery={addGrocery}/>
            {data.map(e => <GroceryList data ={e} handleDelete={handleDelete}/>)}
        </div>
    )
}