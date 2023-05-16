import React, { Fragment } from "react";

class ChildComponent extends React.Component {
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

        let { name, age, address, arrJobs } = this.props
        return (
            <Fragment>
                <div> HI My child age is:{name}-{age}-{address}</div>
                <div className="Job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title}-{item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default ChildComponent;