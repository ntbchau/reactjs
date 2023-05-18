import React from "react";
class F2Component extends React.Component {
    state = {
        title: '',
        salary: ''

    }
    handletitle = (event) => {
        this.setState({
            title: event.target.value

        })

    }
    handlesalary = (event) => {
        this.setState({
            salary: event.target.value

        })

    }

    handleClick = () => {
        alert('click me')
    }
    render() {
        return (
            <>
                <div>
                    <form />
                    <label for="fname">Job's title:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handletitle(event)}
                    /><br />
                    <label for="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handlesalary(event)}
                    /><br></br >
                    <input type="button" value="Submit"
                        onClick={() => this.handleClick()} />
                    <form></form>
                </div>
            </>
        )
    }
}
export default F2Component;