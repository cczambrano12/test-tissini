import React,{Component} from 'react';
import PropTypes from 'prop-types'


import './Task.css'

class Task extends Component {

    //Para modificar estilos dinámicamente según condición
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.tsk.done? 'gray': 'black',
            textDecoration: this.props.tsk.done? 'line-through':'none'
        }
    }
    render(){
        //Destructurar objeto recibido
        const {tsk} = this.props; 
        //Llama clase "backg" del archivo de estilos Task.css
        //Llama a función para definir estilo StyleCompleted
        //Llama objeto de JS btnDelete que contiene estilo
        return <div className ="backg" >
            { tsk.id}
            <div style = {this.StyleCompleted()}>
                { tsk.title} -
                { tsk.description} - 
                <p style = {{fontSize: 16}}>
                    { tsk.done}
                </p>
            </div> 
            <input 
                type = "checkbox"
                onChange = {
                    this.props.checkDone.bind(this, tsk.id)
                }/>
            <button 
                style = {btnDelete}
                onClick = { //Pasa parametro a función con bind
                    this.props.deleteTask.bind(this, tsk.id)
                }>
                X
            </button>
        </div>
    }
}


//Esta constante define todos los atributos deseados para el boton
const btnDelete = {
    fontSize: '18px',
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}


//Definir que tipos de propiedades se van a aceptar para este componente
Task.propTypes = {
    tsk: PropTypes.object.isRequired
}

export default Task;