import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditData=()=>{

   const {id}=useParams();
   const [mydata, setMydata]= useState({});  
   const loadData=()=>{
    let api=`http://localhost:3000/student_data/${id}`
    axios.get(api).then((res)=>{
        setMydata(res.data)
    });
   }

   useEffect(()=>{
    loadData();
   }, [])
const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setMydata(values=>({...values, [name]:value}));
}
const handleSubmit=()=>{  //handleSubmit=(e)
    //e.preventdefault() to prevent form tag use
    let url=`http://localhost:3000/student_data/${id}`
    console.log(mydata);
    axios.put(url, mydata).then((res)=>{
        alert("Data updated!!!")
    })
} //for object is value and for array is map

    return(
        <>
          <h1> Edit Student Data  </h1>
         Enter Rollno <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
         <br/>
         Enter Rollno <input type="text" name="name"  value={mydata.name}  onChange={handleInput} />
         <br/>
         Enter Rollno <input type="text"  name="city" value={mydata.city}   onChange={handleInput} />
         <br/>
         Enter Rollno <input type="text" name="fees"  value={mydata.fees}   onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}> Data Save</button>


        </>
    )
}

export default EditData;