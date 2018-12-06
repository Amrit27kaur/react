import React,{Component} from 'react';




class ToDolist1 extends Component{



    render(){

        return(
        <div>
            <div className="wrapper">

                <div className="row">

                    <div className="col-md-offset-1 col-md-5 col-md-offset-1">

                        <input type="text" className="form-control" id="text" placeholder="Enter anything"/>
                    </div>
                    <div className=" col-md-5 ">

                    <button className="btn btn-primary">ADD</button>

                    </div>

                </div>

            </div>


        </div>
        )


    }



}
export default ToDolist1;