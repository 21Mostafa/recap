import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Nayokss, setnayokss] = useState([])
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>{setnayokss(data)
           
        })
      },[])
    

  
  // const Nayokss = [{name: 'Josim' ,age:"54"},{ name:'Hero' ,age:"32"},{ name:'Dipjol' ,age:"61"}, {name:'Sakib' ,age:"40"}]
  
  return (
    <div className="App">
       
        <MovieCounter></MovieCounter>

          {Nayokss.map(ok =>{
            return <Nayok name = {ok.name} key={ok.id} age={ok.age}></Nayok>
          })}
         

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
        
      </header>
    </div>
  );
}


 
function MovieCounter() {
  
    const [count , setCount] = useState(0)
    const doDa = () => {
      setCount(count + 1)
    }
     

  return (
    <div>
<button onClick = {doDa}>Add Movie </button>
 

<h3>Numbers Of Movie: {count}</h3>
<button onClick ={() => setCount(count - 1)}>Remove Movie</button>
<MovieDisplay movies = {count}></MovieDisplay>
<MovieDisplay movies = {count + 10}></MovieDisplay>
<MovieDisplay movies = {count +5}></MovieDisplay>
<MovieDisplay movies = {count+ 7}></MovieDisplay>
<MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}



function MovieDisplay(props) {
  return (
    <div>
      <h4>
        Movies Where I was Acted : {props.movies}
      </h4>
      </div>
  )
}


function Nayok(props) {
  const nayokStyle ={
    border : ' 2px solid purple',
    margin : '20px'
    
  }
return (
  <div style={nayokStyle}  >
<h3> UserName: {props.name}</h3>
<h5>I Have Done 5 movie in  {props.age || 35} Years</h5>
  </div>
)
}

export default App;
