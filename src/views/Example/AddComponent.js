import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }
    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {

        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing requirement')
            return;
        }
        console.log(this.state)
        this.props.addJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: '',
        })
    }
    render() {
        return (
            <>
                <form action="/action_page.php" />
                <label htmlFor="fname">Job's title:</label><br></br>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangetitle(event)}
                /><br></br>
                <label htmlFor="lname">Salary:</label><br></br>
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event => this.handleChangesalary(event))}
                /><br></br>
                <input type="button" value="Click me"
                    onClick={(event) => { this.handleSubmit(event) }} />
                <form></form>
            </>
        )
    }
}

export default AddComponent;