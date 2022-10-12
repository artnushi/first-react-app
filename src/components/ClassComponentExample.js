import React, {Component} from 'react';
import Button from "./Button";
import withAuthorization from "./hoc/withAuthorization";

class ClassComponentExample extends Component {

    state = {
        isEditing: true,
        users: null,
        isLoaded: false,
        userError: false,
    }

    componentWillMount() {
        console.log()
    }

    componentDidMount() {
        this.fetchUsers();
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
        let { isEditing } = this.state;

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

            </div>
        );
    }
}

ClassComponentExample.propTypes = {};

export default withAuthorization(ClassComponentExample) ;