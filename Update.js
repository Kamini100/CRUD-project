import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = ()=>{
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/login/${id}`,
        {
            name: name,
            email: email,
        }).then(()=>{
            navigate('/read');
        });
    }

    return(
        <>
        <h3>Update Data</h3>
        <form>
        <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp"/>
        </div>
        <button type="submit" onClick={handleUpdate} className="btn btn-primary">Update</button>
        <Link to='/read'><button className="btn btn-secondary mx-2">View Data</button></Link>
        <Link to='/'><button className="btn btn-secondary mx-2">Ragister Data</button></Link>
        </form>
        </>
    )
}
export default Update;