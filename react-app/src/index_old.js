import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));
const handleChange = (e) => {
  console.log(e.target.value);
};

const users = [
  {
    id: 1,
    name: "Jaime Andrés",
    image: "https://robohash.org/jaime",
  },
  {
    id: 2,
    name: "Jaime Vélez",
    image: "https://robohash.org/jaimeA",
  },
  {
    id: 3,
    name: "Salome Vélez",
    image: "https://robohash.org/salome",
  },
  {
    id: 4,
    name: "Carla Vélez",
    image: "https://robohash.org/carla",
  },
];

function Greeting2() {
  const num1 = 12;
  const num2 = 4;

  //puedo crear metodos dentro de metodos!

  function add(x, y) {
    return x + y;
  }
  const user = {
    firstName: "Jaime Andrés",
    lastName: "Vélez",
    age: add(num1, num2),
  };

  return (
    <div>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <h2>{user.age}</h2>
    </div>
  );

  // para retornar en JSON return <h1>{ JSON.stringify(user) }</h1>
  //  const married = false;
  //if (married) {
  //  return <h1>Estoy Casado! 😀</h1>;
  //} else {
  //  return <h1>No Estoy Casado! 🙃</h1>;
  //}
  // Otra forma de lo de arriba! -----> return <h1>{married ? 'estoy casado' : "no estoy casado" }</h1>
}
root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>

  //  <Posts/>

  /*   <>
    <TaskCard ready={false} />
    <Saludar />
    <Button text="Click" />
    <input id="Hola" onChange={handleChange} />
    <input id="Otro Imput" />
    <form onSubmit={(e) => {
      e.preventDefault()
      alert('Envio Form')
      }}>
      <h1>Registro</h1>
      <Button text="Enviar Form"/>
    </form>
    {/* <input
      id="hola"
      onChange={(e) => {
        console.log(e.target.value);
      }} 
    ////>}

    //{/* <input id = "hola" onChange={function(e){
    //console.log(e.target.value)
 // }}/> }
  //</>
  /* puedo poner <div></div> o <></> (contenedor de contenido vacio)
  <>
    <Button text = 'Click'/>
    <Button text = 'Holi'/>
    <Button text = 'Snap' name = 'Jaime'/>
    <Greeting title="Hola mundo" name="Jaime" />
    <Greeting title="Hola react" name="Andrés" />
    <Greeting title="Hola Jaime" />
    <Greeting title="Hola gordo" />

    <UserCard
      name="Jaime Andrés"
      amount={3000}
      married={false}
      points={[99, 33.3, 25.2]}
      addres={{ street: "cra 20A 6-93", city: "Yumbo" }}
      greet={function () {
        alert("Hello");
      }}
    />

     <UserCard
      name="María Salomé"
      amount={2500}
      married={true}
      points={[99, 33.3, 25.2]}
      addres={{ street: "cra 20A 6-93", city: "Cali" }}
      greet={function () {
        alert("Hello");
      }} /> 
  </>
  //<Greeting n="bye"/>
  //<Greeting o = {23}/>
  //<Greeting z = {true}/>
  //<Greeting a = {[1, 2, 3]}/>
  //<UserCard/>
  //<Product/>
  //<NavBar/>*/
);
