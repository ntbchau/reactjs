import React from "react";

class F1Component extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { arrJobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {console.log(this.props)}
                <div>
                    Hello from F1
                    {showJobs === false &&
                        <div>
                            <input type='button' onClick={() => this.handleShowHide()} value='Show' />
                        </div>
                    }
                    {showJobs &&
                        <>
                            <div>
                                {

                                    arrJobs.map((item, index) => {
                                        if (item.salary > 500) {
                                            return (

                                                <div  >
                                                    {item.title}-{item.salary}
                                                </div>
                                            )
                                        }
                                    })}
                            </div>
                            <div>
                                <input type='button' value='Hide' onClick={() => this.handleShowHide()} />
                            </div>
                        </>}
                </div>
            </>
        )
    }
}
export default F1Component;