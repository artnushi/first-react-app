import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';

class CounterClass extends Component {


        state = {

            count: 0,
            test: 'hello'

        }

    rrite = ()=>{
        this.setState({
            count:this.state.count+1,
            test: 'world'
        })
    }


    componentDidMount() {
        console.log('did mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update prevState', prevState)
        console.log('did update', prevState.count, prevState.test)
    }

    componentWillUnmount() {
        console.log('unmounted')
    }


    render() {
        return (
            <div>
                <h1>you clicked  |{this.state.count} times</h1>
                <button onClick={this.rrite}>Click me</button>



            </div>
        );
    }
}

CounterClass.propTypes = {};

export default CounterClass;