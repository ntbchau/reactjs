import React, { Fragment } from "react";

class MyComponent extends React.Component {
    state = {
        address: 'Cologne',
        friend: 'Liem'
    }
    handleClickButton = () => {
        console.log('Hit the button')
        alert('Please click me')
    }
    render() {
        let name = 'Chau'
        return (
            <Fragment>
                {console.log(name + ` is my name`)}
                <div> Hello my component</div>
                <div> My name is {name} and my friend is {this.state.friend} </div>
                <div> We stay in {this.state.address}</div>
                <button onClick={() => this.handleClickButton()}> Click Me</button>
            </Fragment>
        )
    }
}

export default MyComponent;