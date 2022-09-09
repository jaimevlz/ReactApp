import {VscGlobe} from 'react-icons/vsc'
export const Posts = () => {
    return <button onClick={() => {
        //alert('Obtener datos!')
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}> <VscGlobe/>
        Traer Datos</button>
}