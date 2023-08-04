import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Read(){
  const [data,setData] = useState([]);
  const [tabledark,setTableDark] = useState("");

  function getdata(){
    axios.get('http://localhost:3000/login').then((response)=>{
      console.log(response.data);
      setData(response.data);
    })
  }
  
  function handleDelete(id){
    axios.delete(`http://localhost:3000/login/${id}`).then(()=>{
      getdata();
    })
  }

  const setLocalStorage = (id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }

  useEffect(()=>{
    getdata();
  },[]);

  return (
    <>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch"
     onClick={()=>{if(tabledark==='table-dark') setTableDark("") ; else setTableDark("table-dark");}}/>
    </div>
    <div className='d-flex justify-content-between'>
    <h2>Read Operations</h2>
    <Link to='/'><button className='btn btn-secondary'>Ragister Here</button></Link>
    </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          data.map((eachdata)=>{
            return (
              <>
              <tbody>
                  <tr>
                    <th scope="row">{eachdata.id}</th>
                    <td>{eachdata.name}</td>
                    <td>{eachdata.email}</td>
                    <td><Link to='/update'>
                      <button onClick={()=>setLocalStorage(eachdata.id,eachdata.name,eachdata.email)} className="btn btn-success">Edit</button>
                    </Link></td>
                    <td><button onClick={()=>handleDelete(eachdata.id)} className="btn btn-danger">Delete</button></td>
                  </tr>
              </tbody>
              </>
            )
          })
        }
      </table>
    </>
  );
}
export default Read;
