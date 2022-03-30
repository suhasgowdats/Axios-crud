import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const [detail, setDetail]=useState([]);
    const {id}=useParams()
    const nav=useNavigate()
    useEffect(()=>{
      gteData()
    },[])
    async function gteData(){
        let res=await axios.get(`https://6231ac6205f5f4d40d807742.mockapi.io/Axios/${id}`)
        console.log(res)
        setDetail(res.data)
    }

    function handelChange(e){
        setDetail({...detail,[e.target.name]:e.target.value})
    } 

   const saveHandler=async(e)=>{
       e.preventDefault()
       await axios.put(`https://6231ac6205f5f4d40d807742.mockapi.io/Axios/${id}`,detail)
       nav('/')
   }

    


  return (
    <div>
       <form onSubmit={saveHandler}>
           <label onSubmit={(e)=>saveHandler(e)}>Name</label><br/>
           <input type='text' name='name' value={detail.name} required='required' onChange={handelChange} className="editfield"></input><br/>
           <label>Profession</label><br/>
           <input type='text' name='profession' value={detail.profession} required='required' onChange={handelChange} className="editfield"></input><br/>  
           <button type='submit'>Save</button>         
       </form>
    </div>
  )
}
