import React,{Component} from 'react';
import classses from './todolist.css'
import AddTask from '../components/addTask'


class todolist extends Component{




    render(){
     return(
        <div>
            <div className="row">

                <div className="col-lg-offset-2 col-lg-8 col-lg-offset-2">

                    <h1>this is my todo list container</h1>
                    <AddTask/>

                </div>

            </div>

        </div>

     );

    }

}

export default todolist;