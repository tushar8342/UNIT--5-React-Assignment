import { useEffect, useState } from "react"
 
const axios = require("axios");

export const Forms = () => {

    const [formData, setFormData] = useState({ });
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/users`)
        .then(res => {
          setData(res.data)
        });
        getData();
      }, [])
      const getData = () => {
        axios.get(`http://localhost:3001/users`)
        .then(res => {
          setData(res.data)
        });
    
      }
    const handleChange = (e) => {
    
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]:value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3001/users`,formData)

        .then(() => {
            alert("user Created successfully!")
            getData();
            setFormData({
                username:"",
                age:"",
                address:"",
                department:"",
                salary:"",
                marital:"",
            })
    })
        console.log(formData)
    }
    

    return <>
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Employe's Data</h2>
                <input id = "username"
                  value={formData.username} type = "text" 
                  onChange = {handleChange} placeholder = "enter username"/><br />

                <input  id = "age"   
                value={formData.age} type = "number"  
                onChange = {handleChange} placeholder = "enter age"/><br />

                <input  id = "address" 
                 value={formData.address} type = "address"  
                 onChange = {handleChange} placeholder = "enter address"/>
                <br />

                <select id="department" value={formData.department} type="department" onChange={handleChange}>
                    <option>
                        Choose Department
                    </option>
                    <option value="Tech">Tech</option>
                    <option value="Management">Management</option>
                    <option value="Sales">Sales</option>
                </select>
                <br />
                <input  id = "salary"   value={formData.salary} type = "number"  onChange = {handleChange} placeholder = "enter salary"/><br />
                <span>Married</span>
                <input id="marital" type="checkbox" value="married" onChange={handleChange} /><br />
                <input type = "submit" value={"created user"}/> 
            </form>
        </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital State</th>

            </tr>
      
            <tbody>
                {data.map((elem, index) => {

          
                return(
                    <tr>
                        <td>{elem.username}</td>
                        <td>{elem.age}</td>
                        <td>{elem.address}</td>
                        <td>{elem.department}</td>
                        <td>{elem.salary}</td>
                        <td>{elem.marital?`yes`:`no`}</td>
                    </tr>
                )
                })}
 
            </tbody>
        </table>
    </div>
    </>
     
}