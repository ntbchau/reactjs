import React, { Fragment } from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        console.log(this.state)

        let { name, age, address, arrJobs } = this.props;
        let { showJobs } = this.state;
        /* eslint-disable no-unused-vars */
        let check = showJobs === true ? 'showJobs= true' : 'showJobs=false'
        /* eslint-disable no-unused-vars */
        return (

            < Fragment >
                console.log(check)
                <div> HI My child age is:{name}-{age}-{address}</div>

                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    showJobs &&
                    <>
                        <div className="Job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.title}-{item.salary}$
                                            </div>
                                        )
                                    }

                                })
                            }

                        </div>


                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </Fragment >
        )
    }
}

// arrow function
// const ChildComponent = (props) => {
//     let { arrJobs } = props
//     return (
//         <Fragment>

//             <div className="Job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </Fragment>)
// }

export default ChildComponent;