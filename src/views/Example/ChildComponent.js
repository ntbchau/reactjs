import React, { Fragment } from "react";

// class ChildComponent extends React.Component {


//     render() {
//         console.log(this.state)

//         let { name, age, address, arrJobs } = this.props
//         return (
//             <Fragment>
//                 <div> HI My child age is:{name}-{age}-{address}</div>
//                 <div className="Job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </Fragment>
//         )
//     }
// }


const ChildComponent = (props) => {
    let { arrJobs } = props
    return (
        <Fragment>

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
        </Fragment>)
}

export default ChildComponent;