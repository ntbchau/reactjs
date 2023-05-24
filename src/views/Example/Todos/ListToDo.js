import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';
class ListToDo extends React.Component {

    state = {
        listJob: [
            { id: '1', title: 'Doing Homework' },
            { id: '2', title: 'Doing Housework' },
            { id: '3', title: 'Watching Tv' }
        ]

    }
    addNewToDo = (job) => {
        this.setState({
            listJob: [...this.state.listJob, job]
        })
        toast.success("New Activities are added");
    }
    render() {
        let { listJob } = this.state;
        return (

            <>
                <div className="list-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo} />
                    <div className="list-todo-content">
                        {listJob && listJob.length > 0 &&
                            listJob.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1} - {item.title} </span>

                                        <button className="edit"> Edit</button>
                                        <button className="delete"> Delete</button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        )


    }
}
export default ListToDo;