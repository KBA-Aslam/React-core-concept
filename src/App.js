import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


function App() {
  const Products = [
    {name: "Rong Cha", price:"$90.31"},
    {name: "Paan", price:"$75.15"}
  ];
  const friends = [
    {name: 'Riyad', Character: "Medium"},
    {name: 'Shafi', Character: "Married"},
    {name: 'Abir', Character: "Pagla"}
  ];
  // const bandhoo= friends.map(cls => cls.name);
  // console.log(bandhoo);
  var choto= ["zaiyan", "saihan", "Safwaan", "Sinan"];
  // const naam= choto.map(bol => bol);
  // console.log(naam);
  var name= { lastName: "Rahman" }
  var boss= { name: "Sayem",
              lastName: "Aslam" }
  var style= {
             color: 'red',
             backgroundColor: 'black'}
              
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            choto.map(baccha => <li>{baccha}</li>)
          }
        </ul>
            <Users></Users>
            <Counter></Counter>
            <h3>Dr. Mahfuzur {name.lastName}</h3>
            <h3 style={style} >BOSS: {boss.name +" "+ boss.lastName}</h3>
            
            <Product product={Products[0]}> </Product>
            <Product product={Products[1]}></Product>
            {/* <Product></Product> */}
            {
              friends.map(close => <Bondhu friend={close}></Bondhu>)
            }
            <Person name={choto[0]} job="faaki deoya"></Person>
            <Person name={choto[1]} job="Tv gika"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h3>Count: {count} </h3>
      <button onClick={() => setCount(count - 1)}>Descrise</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
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

function Bondhu(props){
  const BStyle={
    color: "black",
    backgroundColor: "lightgray",
    border: "1px solid gray",
    borderRedius: "16px 0px 16px 0px",
    margin: "10px",
    height: "200px",
    width: "200px"
  }
  return (
    <div style={BStyle}>
      <h3>{props.friend.name}</h3>
      <h5>{props.friend.Character}</h5>
    </div>
  )
}

function Product(props){
  const PStyle={
    color: "black",
    backgroundColor: "lightgray",
    border: "1px solid gray",
    borderRedius: "16px 0px 16px 0px",
    margin: "10px",
    height: "200px",
    width: "200px"
  }
  console.log(props.product)
  const {name, price}= props.product;
  console.log(name, price);
  return (
        <div style={PStyle}>
          <h3>{props.product.name}</h3>
          <h5>{props.product.price}</h5>
          <button style={{backgroundColor:"green"}}>Order Now</button>
        </div>

  )
}



export default App;
