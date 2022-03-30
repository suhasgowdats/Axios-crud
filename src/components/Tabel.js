import React, {useEffect,useState,Fragment} from "react"
import axios from "axios"
import "./Tabel.css"
import { NavLink } from "react-router-dom"


export default function Tabel() {
    const [customList, setcustomList]=useState([])
    useEffect(()=>{
       dataStore()
    },[])
    async function dataStore(){
        let res=await axios.get('https://6231ac6205f5f4d40d807742.mockapi.io/Axios')
        setcustomList(res.data)
    }
    async function redisplayData(){
        let res=await axios.get('https://6231ac6205f5f4d40d807742.mockapi.io/Axios')
        setcustomList(res.data)
    }


    console.log(customList)
    const deleteHandler= async (e,id)=>{
       e.preventDefault()
      let res= await axios.delete(`https://6231ac6205f5f4d40d807742.mockapi.io/Axios/${id}`)
      console.log(res)
       redisplayData()
    }

    
    return (
        <>
        <div>
            <h1>Customer Data</h1>
        </div>
        <div>
            <table className="mainTabel">
                <thead>
                    <tr>
                        <td>Sl no.</td>
                        <td>Name</td>
                        <td>Profession</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                     customList.map((item,i)=>{
                         return(
                             <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.profession}</td>
                                <td>
                                    <NavLink className='btn'to={`details/${item.id}`}><button className='btn1'>Details</button></NavLink>
                                    <NavLink className='btn' to={`edit/${item.id}`}><button className='btn1'>Edit</button></NavLink>
                                    <button className='btn1' onClick={(e)=>deleteHandler(e,item.id)}>Delete</button>
                                </td>
                             </tr>
                         )
                     })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
