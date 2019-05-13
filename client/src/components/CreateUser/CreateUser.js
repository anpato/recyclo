import React, { Component } from 'react';
import {signup} from '../../Services/ApiServices';

class CreateUser extends Component {
    constructor(){
        super();
        this.state = {
            isValid : false,
            name: '',
            username: '',
            email : '',
            password: ''
        }
    }

    handleSignUp = async () => {
        const {name,username,email,password} = this.state;
        try {
            const resp = signup({name,username,email,password});
            console.log(resp);
            this.setState({isValid:true});
        } catch (error) {
            throw error
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.handleSignUp();
    }

    handleFormChange= e => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({[fieldName] : value})
    }

    render() {
        const {name,password,email,username} = this.state;
        return (
            <div className="signup-form">
                <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} />
                    <label>Email</label>
                    <input type="email" name="email" value={email} />
                    <label>Username</label>
                    <input type="text" name="username" value={username} />
                    <label>Password</label>
                    <input type="password" name="password" value={password} />
                    <button type="submit"> Sign Up</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;