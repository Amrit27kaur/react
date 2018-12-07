import React,{Component} from 'react';




class ToDolist1 extends Component{

    state={

        task:'',
        listOfTasks: []

    }


    btnClicked =()=>{
        alert("button clicked")
        this.setState({listOfTasks:[...this.state.listOfTasks,this.state.task]})
        this.setState({task:''})
    }

    addTask=(event)=>
    {
        this.setState({task:event.target.value})
    }

    deleteTask=(event)=>
    {
        let index = this.state.listOfTasks.indexOf(event.target.innerText)

        let newArr = [...this.state.listOfTasks]
        newArr.splice(index,1)
        this.setState({listOfTasks:newArr})
    }

    render(){

        return(
        <div>
            <div className="container">

                <div className="row">

                    <div className="col-md-offset-1 col-md-5 col-md-offset-1">

                        <input type="text" onChange={this.addTask} value={this.state.task} className="form-control" id="text" placeholder="Enter anything"/>
                    </div>

                    <div className=" col-md-5">

                    <button onClick={this.btnClicked} className="btn btn-primary">ADD</button>

                    </div>

                </div>
                <div className="row">

                    <div className="col-md-offset-2 col-md-10">
                        <br/>
                        <h4>task</h4>
                        <ul>
                            {this.state.listOfTasks.map(task => (
                                <li onClick={this.deleteTask}>{task}</li>

                            ) )}


                        </ul>
                    </div>

            </div>


        </div>
        </div>
        )


    }



}
export default ToDolist1;