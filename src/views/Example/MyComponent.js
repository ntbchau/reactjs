import React, { Fragment } from "react";

class MyComponent extends React.Component {
    state = {
        address: 'Cologne',
        friend: 'Liem'
    }
    render() {
        let name = 'Chau'
        return (
            <Fragment>
                {console.log(name + ` is my name`)}
                <div> Hello my component</div>
                <div> My name is {name} and my friend is {this.state.friend} </div>
                <div> We stay in {this.state.address}</div>
            </Fragment>
        )
    }
}

export default MyComponent;