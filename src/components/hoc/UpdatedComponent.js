import React, { Component } from 'react'
const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component {
        state = {
            money: 10
        }

        handleIncrease = (variabla) => {
            this.setState({
                money: this.state.money * variabla
            });
        }

        render() {
            return <OriginalComponent money={this.state.money} handleIncrease={this.handleIncrease} />
        }
    }

    return NewComponent;
}

export default UpdatedComponent;