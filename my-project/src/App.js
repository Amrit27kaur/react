import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './hoc/hoc';
import Todolist from './container/todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList1 from './container/ToDoLIst1/ToDoList1';

class App extends Component {


    // state is object
    state= {
         name:'John',
         course:'React 101'

    }

    ChangeName=()=> {

        console.log("Old Name is :" + this.state.name)

       // this.state.name = "Sam!"
        this.setState({name : "Sam!"})
        console.log("New name is :"+ this.state.name)
    }


  render() {        //render is a function we can create function after and befor render
    return (


        <div>
           <h1>This name is fetched from state {this.state.name}</h1>
        <Todolist/>
            <Todolist/>

            <button className="btn btn-danger" onClick={this.ChangeName}>click here</button>

            <br/><br/>

            <ToDoList1/>


          </div>
    );
  }
}

export default App;
