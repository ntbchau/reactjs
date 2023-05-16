import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {

        arrJobs: [
            { id: 'j1', title: 'developer', salary: '500' },
            { id: 'j2', title: 'tester', salary: '300' },
            { id: 'j3', title: 'manager', salary: '1000' },
        ]
    }



    render() {
        console.log(this.state)
        return (
            <Fragment>
                <AddComponent />

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