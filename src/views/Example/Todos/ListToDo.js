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
        ],
        listEdit: {}

    }
    addNewToDo = (job) => {
        this.setState({
            listJob: [...this.state.listJob, job]
        })
        toast.success("New Activities are added");
    }
    handleClickDelete = (job) => {
        let currentJob = this.state.listJob;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            listJob: currentJob
        })
        toast.success("Activities is deleted");
    }
    handleClickEdit = (job) => {
        let { listEdit, listJob } = this.state
        let emptyObj = Object.keys(listEdit).length === 0;
        //save
        if (emptyObj === false && listEdit.id === job.id) {
            let listJobCopy = [...listJob];
            let objIndex = listJobCopy.findIndex((item => item.id === job.id))
            listJobCopy[objIndex].title = listEdit.title;
            this.setState({
                listJob: listJobCopy,
                listEdit: {}
            })
            toast.success("Activities is edited");
            return;
        }
        //edit
        this.setState({
            listEdit: job
        })

    }
    handleChangeEdit = (event) => {
        let listEditCopy = { ...this.state.listEdit }
        listEditCopy.title = event.target.value
        this.setState({
            listEdit: listEditCopy
        })
    }
    render() {
        let { listJob, listEdit } = this.state;
        let emptyObj = Object.keys(listEdit).length === 0;
        return (

            <>
                <p>
                    Navigation Example
                </p>
                <div className="list-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo} />
                    <div className="list-todo-content">
                        {listJob && listJob.length > 0 &&
                            listJob.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {emptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {listEdit.id === item.id ?
                                                    <span>
                                                        {index + 1} <input value={listEdit.title}
                                                            onChange={(event) => this.handleChangeEdit(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleClickEdit(item)}>
                                            {emptyObj === false && listEdit.id === item.id ?
                                                'Save' : 'Edit'} </button>
                                        <button className="delete"
                                            onClick={() => this.handleClickDelete(item)}> Delete</button>
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