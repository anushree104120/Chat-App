import "./App.css";
import { useState,useEffect } from "react";
import io from "socket.io-client";

let socket;
const CONNECTION_PORT = "localhost:3001/"



function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
  const[room, setRoom]=useState("")
  const[userName,setuserName]=useState('');


  useEffect(()=>{
    socket=io(CONNECTION_PORT)
  },[CONNECTION_PORT])

  const connectToRoom = ()=>{
    socket.emit('join_room',room)
  }

  return (
    <div className="App">
      <h1>Welcome to Chat App</h1>
      {
      !isLoggedin ? (
        <div className="logIn">
          <div className="inputs">
            <input type="text" placeholder="Enter your name" onChange={(e)=>{
              setuserName(e.target.value)
            }}></input>
            <input type="text" placeholder="Enter your room" onChange={(e)=>{
              setRoom(e.target.value)
            }}></input>
           
          </div>
          <button onClick={connectToRoom}>Enter  to Chat</button>
        </div>
      ) : (
        <h1>welcomd</h1>
      )}
    </div>
  );
}

export default App;
