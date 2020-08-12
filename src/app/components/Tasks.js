import React,{Component} from 'react';
import Task from './Task'

class Tasks extends Component{
    //Como se le pasaron los Tasks a esta clase entonces ya hacen parte de sus propiedades props.
    render() { //Retorna un arreglo de componentes HTML (JSX)
        //Recorre el listado y retorna arreglo de elementos
        //React espera que se le de un key a cada elemento generado
        return this.props.tasks.map(
            task => <Task 
                tsk={task} 
                key={task.id}
                deleteTask = {this.props.deleteTask}
                checkDone = {this.props.checkDone}
            />)
    }
}


export default Tasks;