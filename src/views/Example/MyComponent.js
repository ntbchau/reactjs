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
    handleOnChange = (event) => {
        this.setState({
            friend: event.target.value

        })
    }

    render() {
        console.log(this.state)
        let name = 'Chau'
        return (
            <Fragment>
                {/* {console.log(name + ` is my name`)} */}
                <div> Hello my component</div>
                <div> My name is {name} and my friend is {this.state.friend}
                    <input value={this.state.friend} type="text" onChange={(event) => this.handleOnChange(event)} /> </div>

                <div> We stay in {this.state.address}</div>
                <button onClick={() => this.handleClickButton()}> Click Me</button>
            </Fragment>
        )
    }
}

export default MyComponent;