import { useState,useEffect } from "react"
import { GroceryList } from "./GroceryList"
import axios from 'axios'

export const GroceryInput = ()=>{
    const [grocery,setGrocery] = useState("")
    const [add,setAdd] = useState([])
    const [page,setPage] = useState(1)
    useEffect(()=>{
        getData()   
        
    },[page])
    const getData = ()=>{
        axios.get(`http://localhost:3001/groceries?_page=${page}&_limit=4`).then((res)=>{
            setAdd(res.data)
            setGrocery("")
        })
    }
    const show = ()=>{
        if(!grocery) return;
        axios.post("http://localhost:3001/groceries",{name:grocery}).then(()=>getData())
    }
    return(
        <>
        <div>
            <input type="text" placeholder="Type here to note" onChange={(event)=>{
                setGrocery(event.target.value)
            }}></input>

            <button onClick={show}>Add item</button>
            {add.map((item)=><GroceryList key={item.id} item={item}/>)}

            <button disabled={(page==1)?true:false} onClick={()=>{setPage(page-1)}}>Prev</button>
            
            <button onClick={()=>{setPage(page+1)}}>Next</button>
        </div>
        </>
    )
}