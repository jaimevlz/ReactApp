import React,{useState, useEffect} from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));
function Counter() {
  //const [counter, setCounter] = useState(0)}
  const [mensaje, setMensaje] = useState('')
  const [counter, setCounter]  = useState(0)

  useEffect(() =>{
    console.log('render')
  }, [counter])

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert('El mensaje es: ' + mensaje)
      }}>
        Guardar
      </button>
      <hr/>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >Incrementar</button>
    </div>
    
/*     <div>
      {" "}
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Restablecer
      </button>
    </div> */
  );
}
root.render(
  <>
    <Counter />
  </>
);
