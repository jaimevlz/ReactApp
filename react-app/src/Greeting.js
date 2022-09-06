export function Greeting({title, name= "User"}) {
    console.log(title, name)
    return <h1>{title}, dice: {name}</h1>
}
//puedo poner metodo(props) solo o usar metodo({title}) dentro de los param del metodo, se puede usar varios param dentro del metodo, y en el hmtl en el index.js

export function UserCard({name, amount, married, addres, greet}){
    console.log(name, amount, married, addres, greet);
    return <div>
        <h1>{name}</h1>
        <p>${amount}</p>
        <p>{married ? 'Casado' : 'Soltero'}</p>
        <ul>
            <li>{addres.city}</li>
            <li>{addres.street}</li>
        </ul>
        </div>

        //puedo pegar emoji en el $
}