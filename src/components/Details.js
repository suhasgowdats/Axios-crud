import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Details() {
    const [view, setView]=useState([])
    let {id}=useParams()
    let nav=useNavigate()
    useEffect(()=>{
        getCostumData()
    },[])
   async function getCostumData(){
       let res= await axios.get(`https://6231ac6205f5f4d40d807742.mockapi.io/Axios/${id}`)
       console.log(res)
       setView(res.data)
    }
  return (
    <div>
        <h1>Name:{view.name}</h1>
        <h1>Profession:{view.profession}</h1><br/>
        <button onClick={()=>nav('/')}>Back</button>
    </div>
  )
}
