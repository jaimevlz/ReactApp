//usar npm install --save prop-types para instalar el manejador de variables dentro de los componentes
import PropTypes from 'prop-types';

export function Button ({text, name = 'User'}){

    if(!text){
        console.error('Tipo String requerido')
    }else{
    return <button onClick = {function(){
        console.log('Hola Mundo!')
    }}>
        {text} - {name}
    </button>
    }

}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}