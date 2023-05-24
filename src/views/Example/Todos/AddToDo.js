import React from "react";
import { toast } from 'react-toastify';
class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleChangeAdd = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAdd = () => {
        if (!this.state.title) {
            toast.error("Missing requirement");
            //alert('Missing require')
            return;
        }
        let job = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewToDo(job);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleChangeAdd(event)} />
                <button type="button" className="add"
                    onClick={() => this.handleClickAdd()}>Add</button>
            </div>
        )

    }
}
export default AddToDo;