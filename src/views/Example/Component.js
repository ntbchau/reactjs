import React from 'react';
import F1Component from './F1Component';
import F2Component from './F2Component';
class Ex1 extends React.Component {
    state = {

        arrJobs: [
            { id: '1', title: 'doctor', salary: '1000' },
            { id: '2', title: 'master', salary: '900' },
            { id: '3', title: 'bac', salary: '100' }
        ]
    }

    render() {


        return (

            <>
                {console.log(this.state)}
                <div> Hello Component</div>

                <F1Component

                    arrJobs={this.state.arrJobs}
                />
                <F2Component />
            </>
        )


    }

}

export default Ex1;