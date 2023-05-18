import React from "react";
import axios from "axios";
// import Save from "./Save";
import { useEffect, useState } from "react";


const Student = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    const result = await axios.get("http://localhost:8080/student/getall");
    setUsers(result.data);
    console.log(result.data);
  }

  // ----------------------------------------------------------------
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/student/save", {
        name: name,
        add: add,
        mobile: mobile,
      });

      alert("Student Registation Successfully");
      setId("");
      setName("");
      setAdd("");
      setMobile("");
      // Load();
    } catch (err) {
      alert("please enter valid data");
    }
  }
  //--------------------------------------------------------------------------------
  function filterStudents(e) {
    e.preventDefault();

    const filteredStudents = students.filter(s => s.add.startsWith(e.target.value))
    setUsers(filteredStudents)
 

  }


  // ----------------------------------------------------------------------------------------------

   async function editStudent(students) {
    setName(students.name);
    setAdd(students.add);
    setMobile(students.mobile);
    setId(students.id);
  }
  

  
//-----------------------------------------------------------------------
  async function DeleteStudent(id) {
    await axios.delete("http://localhost:8080/student/delete/" + id);
    alert("Student deleted Successfully");
    Load();
  }
//-----------------------------------------------------------------------
  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:8080/student/edit/" + id, {
        name: name,
        add: add,
        mobile: mobile,
      });
      alert("Registation Updateddddd");
      setId("");
      setName("");
      setAdd("");
      setMobile("");
      Load();
    } catch (err) {
      alert("Student Updateddd Failed");
    }
  }

  return (
    <div className="main">
     
            
           
  
      <h1>Student Details</h1>
      <div class="container mt-4">
        <form>
  
          <div class="form-group">
            <label>Student Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name} //sets the current value of the input field to the name state variable
              onChange={(event) => {
                setName(event.target.value); // is an event listener that triggers when the value of the input field changes.
                //It sets the name state variable to the new value of the input field.
              }}
            />

            <label>Student Address</label>
            <input
              type="text"
              class="form-control"
              id="add"
              value={add}
              onChange={(event) => {
                setAdd(event.target.value);
              }}
            />

            <label>Mobile</label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              value={mobile}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />
          </div>
    
          <div>
            <button class="btn btn-primary mt-4" onClick={(e) => {save(e)}}>
              Register
            </button>

            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
     
          </div>
        </form>
      </div>
      <br />
   
      <div>   <input type="text" className="loc" placeholder="Enter the location address" onChange={(e) => {filterStudents(e)}}/></div>
  
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {students.map(function (student) {
          return (
            <tbody>
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.add}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editStudent(student)} >  Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteStudent(student.id)}>Delete
                 </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
     
    </div>
  );
};

export default Student;
