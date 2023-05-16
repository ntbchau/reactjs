import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 'j1', title: 'developer', salary: '500k' },
            { id: 'j2', title: 'tester', salary: '300k' },
            { id: 'j3', title: 'manager', salary: '1000k' },
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render() {
        console.log(this.state)
        return (
            <Fragment>
                <form action="/action_page.php" />
                <label htmlFor="fname">First name:</label><br></br>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                /><br></br>
                <label htmlFor="lname">Last name:</label><br></br>
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event => this.handleChangeLastName(event))}
                /><br></br>
                <input type="button" value="Click me"
                    onClick={(event) => { this.handleSubmit(event) }} />
                <form></form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'30'}
                    address={'Cologne'}
                    arrJobs={this.state.arrJobs}

                />


            </Fragment>
        )
    }
}

export default MyComponent;