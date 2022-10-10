import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import swal from 'sweetalert';

class ClassComponentExample extends Component {

    state = {
        isEditing: true,
        users: null,
        isLoaded: false,
        userError: false
    }

    componentWillMount() {
        console.log()
    }

    componentDidMount() {
        this.fetchUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('prev props', prevProps)
        // console.log('prev state', prevState)
        // if (prevProps.userError === true) {
        //     swal ( "Users successfully saved" ,  "Something went wrong!" ,  "success" )
        // } else {
        //     swal ( "Error on getting the users" ,  "Something went wrong!" ,  "error" )
        // }
    }

    setEditing = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( (data) => {
                this.setState({
                    users: data,
                    isLoaded: true,
                    userError: false

                })
            }, () => {
                this.setState({
                    userError: true
                })
            })
    }

    render() {
        let { isEditing, isLoaded, users } = this.state;

        let editingText = '';

        if (isEditing) {
            editingText = 'Editing text is true'
        } else {
            editingText = 'Editing text is false'
        }

        return (
            <div>
                <p>Class component example </p>
                {editingText}

                <Button klasat={'btn btn-primary'} name="Button example" handleClick={this.setEditing } >
                    Button name
                </Button>

                {/*<Button klasat={'btn btn-primary'} name={'Button name'} handleClick={'hello' } />*/}
            </div>
        );
    }
}

ClassComponentExample.propTypes = {};

export default ClassComponentExample;