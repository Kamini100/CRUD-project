import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log("Data submitted..")
        axios.post(
            'http://localhost:3000/login',{
            name: name,
            email: email,
    }).then((response)=>{
      let clearName = "";   //after sumiting name and email will clear
      let clearEmail = "";
      setName(clearName)
      setEmail(clearEmail)
      console.log(response)
      alert("data has been submitted..")
      history('/read');
    })
    }

  return (
    <>
    <div className='d-flex justify-content-between'>
    <h2>Ragister</h2>
    <Link to='/read'><button className='btn btn-primary'>Show Data</button></Link>
    </div>
    <form>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
    </div>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp"/>
    </div>
    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
export default Create;
