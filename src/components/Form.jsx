import { useRef, useState } from "react";
import "./Form.css";

export const Form = ({ getData, filterData, showAll }) => {
    const [formDet, setForm] = useState({
        username: "",
        age: "",
        address: "",
        salary: "",
        department: "",
        profilePhoto: "",
    });
    const fileRef = useRef(null);

    const handleChange = (e) => {
        // console.log(fileRef.current.files);
        let {name, value, checked, type, files} = e.target;
        value = type === "checkbox" ? checked : value;
        setForm({
            ...formDet, 
            [name]: value,
            files,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formDet);
        // console.log(getData);
        getData(formDet);
    };
    
    const handFilter = (e) => {
        console.log(e.target.value);
        //http://localhost:3002/users?department=IT
        fetch(`http://localhost:3002/users?department=${e.target.value}`)
        .then((d) => d.json())
        .then((res) => {
            filterData(res);
        });
    };

    const handleShowAll = () => {
        showAll();
    };

    const {department, Married, Single} = formDet;

    // console.log(form);
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="username" type="text" placeholder="Enter Name" />
                <input onChange={handleChange} name="age" type="number" placeholder="Enter Age" />
                <input onChange={handleChange} name="address" type="text" placeholder="Enter Address" />
                {/* //Select tag */}
                <select onChange={handleChange} name="department" value={department}>
                    <option value="none">None</option>
                    <option value="IT">IT</option>
                    <option value="sales">Sales</option>
                </select >
                <input onChange={handleChange} name="salary" type="number" placeholder="Enter Salary" />
                {/* //checkbox */} 
                <input className="checkBox" onChange={handleChange} name="married" type="checkbox" checked={Married} />
                <label>Married</label>    
                <input className="checkBox" onChange={handleChange} name="single" type="checkbox" checked={Single} />
                <label>Single</label>
                {/* //file */}
                <input onChange={handleChange} ref={fileRef} name="profilePhoto" type="file" />
                <input type="submit" value="submit" />
            </form>

            <div className="filter">
                Filter as per department: 
                <select onChange={handFilter} name="department" value={department}>
                    <option value="none">None</option>
                    <option value="IT">IT</option>
                    <option value="sales">Sales</option>
                </select >
                <button onClick={handleShowAll} className="showAllBtn">Show All</button>
            </div>

            <table className="head">
                <thead>
                    <tr>
                        <td>Profile Photo</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Location</td>
                        <td>Salary</td>
                        <td>Martial Status</td>
                        <td>Department</td>
                        <td>Mark Deleted</td>
                    </tr>
                </thead>
            </table>
            
        </div>
        
    );
}