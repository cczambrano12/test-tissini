import React,{Component} from 'react';

//Por defecto los formularios HTML tratan de enviar datos a un servior y refrescar la página. Se debe cancelar este evento "onSbubmit"

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }
    
    //Escucha el evento de envío para sobreescribir su acción
    onSubmit = e => {
        //Ver en browser consola seleccionandole opcion Preserve Log cuando refresca
        //console.log(e); 
        this.props.addTask(
            this.state.title, 
            this.state.description
        );
        e.preventDefault(); //Cancela autorefresh

    }

    //Escuchar eventos de los campos de entrada cuando cambia su contenido
    onChange = e => {
        //console.log(e.target.value)
        this.setState({
            //Interpretar el valor del campo como nombre de propiedad
           [e.target.name]:e.target.value 
        })
    }
    
    render() {
        //Se debe modificar evento onSubmit y agregar eventos a los campos de escritura onChange
        return (
            <form style = {{padding: "10px"}} onSubmit={this.onSubmit}>
                <p>Cree una nueva tarea</p>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a Task" 
                    onChange = {this.onChange} 
                    value = {this.state.title}/>
                <br/><br/>
                <textarea 
                    name="description"
                    placeholder = "write a Description" onChange = {this.onChange} 
                    value = {this.state.description}/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}
