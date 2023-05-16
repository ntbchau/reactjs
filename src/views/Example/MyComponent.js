import React, { Fragment } from "react";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
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
            </Fragment>
        )
    }
}

export default MyComponent;