//puedo importar el css desde aqui para estilizar!
import './task.css'

export function TaskCard(props){
//Se puede usar de las 2 maneras arreglo pasado como parametro a componente o pasar los parametros directo en el componente
    {/*const cardStyles = {background: '#202020', color: '#ffffff', padding: '20px'}
    return <div style={cardStyles}>*/}
    {/*</div>return <div style={{background: '#202020', color: '#ffffff', padding: '20px'}}>  */}
        {/*<h1 style={{fontWeight: "lighter"}}>Mi primer tarea</h1>
        <p>Tarea realizada</p>
    </div>*/}
    return (
        <div className='card'>
            <h1>Mi Primera Tarea</h1>
            <span style={props.ready ? {background: 'green'}: {background: 'red'}}>{
                props.ready ? 'Tarea Realizada' : 'Tarea Pendiente'
                }</span>
            {/*<p>Tarea realizada</p>*/}
        </div>
    );
}

//<span style={props.ready ? {background: 'green'}: {background: 'red'}}>{
//    props.ready ? 'Tarea Realizada' : 'Tarea Pendiente'
//}</span>
//se puede hacer <span className={props.ready ? 'bg-green' : 'bg-red'}> llamando el style dentro de task.css