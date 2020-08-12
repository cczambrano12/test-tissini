import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//Componentes
//import Tasks from "./components/Tasks";


class App extends Component {
  //Traer los datos como estado para ser manipulados dentro del component
  render() {
    // las llaves {} permiten ejecutar codigo JS dentro
    //Llama el componente Tasks dentro de la division pasandole la funcion addTask
    return (
      <div>
        Hello
        {/* <Router>
          <Link to="/">Home</Link><br/>
          <Link to="/categorias">Posts</Link>
          <Route
            exact path="/"
            render={() => {
              return (
                <div>
                  <TaskForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={Posts}/>
        </Router> */}
      </div>
    );
  }
}

export default App;
