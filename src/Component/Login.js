import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../'



class Login extends Component {
    static PropTypes={
        user: PropTypes.string.isRequired,
        pass:PropTypes.number.isRequired
    }
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

   
    handleLogin() {

    }

    handleChange(e,name) {
        this.props.eventChange(e.target.value,name)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.handleChange(e,'user')} placeholder="username" value={this.props.user} />
               
                    <input type="text" onChange={(e)=>this.handleChange(e,'pass')} placeholder="password" value={this.props.pass} />
             
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

class FormLogin extends Component {

    constructor(props) {

        super(props)
        this.state = {
            user: '',
            pass: ''
        }

        // this.handleUserChange = this.handleUserChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // handleUserChange(user,name) {
    //     this.setState({ user: user })
    // }

    handleChange(value,name) {
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="container">
                <Login user={this.state.user} pass={this.state.pass} eventChange={this.handleChange} />

            </div>
        )
    }
}
export default FormLogin