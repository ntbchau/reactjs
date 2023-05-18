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
    addNewJob = (job) => {
        console.log('check from parent', job)
        //let currentJobs = this.state.arrJobs;// cach1
        //currentJobs.push(job)//cach1

        this.setState({
            //arrJobs: currentJobs//cach1
            arrJobs: [...this.state.arrJobs, job]//cach2
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }



    render() {
        console.log(this.state)
        return (
            <Fragment>
                <AddComponent
                    addJob={this.addNewJob}

                />

                <ChildComponent
                    name={this.state.firstName}
                    age={'30'}
                    address={'Cologne'}
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}

                />


            </Fragment>
        )
    }
}

export default MyComponent;