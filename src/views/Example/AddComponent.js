import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: "",
        salary: "",
    }
    handleChangetitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert('Liem please click me')
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <>
                <form action="/action_page.php" />
                <label htmlFor="fname">Job's title:</label><br></br>
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleChangetitleJob(event)}
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