import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Person from './component/Person';
// const singers=[
//   {name:'Dr Naiz',job:'singer'},
//   {name:'Rajon',job:'mern stack developer'},
//   {name:'maruf',job:'eee'},
//   {name:'sezar',job:'entertainer'}
// ];

function App() {
  const nayoks=["Riaz","Shakib","Rubel","Faruk","Omor Sany"]
  return (
    <div className="App">
      <h1 className='btn btn-primary'>Hello World</h1>
      <h2>Bangladesh</h2>
      <Footer></Footer>
      <Person name="RAJON" job="MERN stack developer"></Person>
      <Person name="Faisal Vai" job="Sopport instructor"></Person>
      {
      nayoks.map(nayok=><li>Actor Name:{nayok}</li>)
}
{/* {
  singers.map(singer=><Friend singer={singer}></Friend>)
} */}
     <Counter></Counter>
     <ExternalUsers></ExternalUsers>
    </div>
  );
}

// function Friend(props){
//   return(
//     <div className='container'>
//     <h1>Name:{props.singer.name}</h1>
//     <h1>Profession:{props.singer.job}</h1>
//     </div>
//   )
// }
//usestate
function Counter(props){
  const [count,setcount]= useState(0);
  const increaseCount=()=>{
       setcount(count+1)
  }
  const decreaseCount=()=>{
    setcount(count-1)
  }
return(
  <div>
    <h1>count:{count}</h1>
  <button onClick={increaseCount} className='btn btn-primary'>Increase</button><br></br><br></br>
  <button onClick={decreaseCount} className='btn btn-warning'>Decrease</button>
  </div>
)
}

//data loading
//1.useState
//2.useEffect
//3.data loading
//4. connect with state
//5. show data with maping
function ExternalUsers(props){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    loadUsers()
  },[])
  const loadUsers=async ()=>{
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data)
    setUsers(data);
  }
  return(
    <div>
      <h1>User Information:{users.length}</h1>
      {
        users.map(user=><User user={user}></User>)
      }
    </div>
  )
}
function User({user}){
  return(
    <div className='container'>
      <h1>Name: {user.name}</h1>
      <h5>Email: {user.email}</h5>
      <h6>User Name: {user.username}</h6>
    </div>
  )
}
export default App;
