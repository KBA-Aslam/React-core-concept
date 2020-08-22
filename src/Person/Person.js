import React, { useState, useEffect } from 'react';

function Person(props){ 
    const person1= {
      border: "2px solid red",
      margin: "11px"
    }
    return (<div style={{border: "2px solid red",
    margin: "11px", width:"400px"}}>
            <h1>Name: {props.name} </h1>
            <h3>Profession: {props.job} </h3>
                </div>)
    }

    function Users(){
        const [users, setUser] = useState([]);
      
        useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
        }, [])
      
        return (
            <div>
                <h3>Dynamic users: {users.length} </h3>
                <ul>
                  {
                    users.map(user => <li>{user.name}</li> )
                  }
                </ul>
            </div>
        )
      }


    export default Person;