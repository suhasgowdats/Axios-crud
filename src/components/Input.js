import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./input.css"


export default function Input() {
    const [addCustom, setaddCustom]=useState({
        name:"",
        profession:""
    })
    let navigte=useNavigate()
    function inputHandler(e){
        setaddCustom({...addCustom,[e.target.name]:e.target.value})
    }

    async function SubmitHandler(event){
        event.preventDefault()
        // alert("hi")
        
        const response = await axios.post('https://6231ac6205f5f4d40d807742.mockapi.io/Axios',addCustom)
        setaddCustom({
            name:'',
            profession:''
        })
        console.log(response.data)
        // alert("hisdghjsgjhgsjgdkjsgdkjhgsdjg")
        navigte('/')
    }
  return (
    <div>
        <form onSubmit={(event)=>SubmitHandler(event)}>
            <label className='tag'>Name</label><br/>
            <input typr="text" name='name' placeholder='Enter name' value={addCustom.name} required="required" onChange={inputHandler} className="inp"></input><br/>
            <label className='tag'>Profession</label><br/>
            <input typr="text" name='profession' value={addCustom.profession} placeholder='Enter name' required="required" onChange={inputHandler} className="inp"></input><br/>
            <button className='btn2' type='submit'>Submit</button>            
        </form>
    </div>
  )
}
