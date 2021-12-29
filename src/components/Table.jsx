import { useEffect, useState } from "react";
import { Form } from "./Form";
import { TableList } from "./TableItem";

export const Table = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch("http://localhost:3002/users")
        .then((d) => d.json())
        .then((res) => {
            setUser(res);
        });
    }

    const handleData = (data) => {
        //console.log(data);
        let martialStatus = "";
        if(data.married){
            martialStatus = "married";
        }
        if(data.single){
            martialStatus = "single";
        }

        const userData = {
            username: data.username,
            age: data.age,
            address: data.address,
            salary: data.salary,
            department: data.department,
            martialStatus: martialStatus,
            profilePhoto: data.profilePhoto,
        }
        fetch("http://localhost:3002/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "content-type": "application/json",
            }
        })
        .then(() => {
            getUsers();
        });
    }; 

    const filterDep = (data) => {
        setUser(data);
    };

    const showAll = () => {
        getUsers()
    };
    
    const deleteUser = (id) => {
        fetch(`http://localhost:3002/users/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            getUsers();
        });
        
    };


    return (
        <div>
           <Form getData={handleData}  filterData={filterDep} showAll={showAll} />
           {user.map((el) => (
               <TableList {...el} deleteUser={deleteUser} />
           ))}
        </div>
    );
};