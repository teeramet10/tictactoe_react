import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createBrowserHistory from 'history/createBrowserHistory'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import '../'


class ShowModal extends Component {

    constructor(props) {
        super(props)
        this.closeDialog = this.closeDialog.bind(this);
    }
    closeDialog() {
        this.props.handleClose();
    }

    render() {
        return (

            <ModalContainer>
                <ModalDialog>
                    <h1>Please Fill in Form</h1>
                    <button onClick={this.closeDialog}>Close</button>
                </ModalDialog>
            </ModalContainer>)
    }
}


class Login extends Component {
    static PropTypes = {
        user: PropTypes.string.isRequired,
        pass: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props)

        this.state = {
            isShowDialog: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }


    handleLogin() {

        if (this.props.user !== '' && this.props.pass !== '') {
            const history = createBrowserHistory({
                basename: '/',
                forceRefresh: true
            })
            history.listen(location => {
                console.log(location.pathname)
            })
            history.push('/test')
        } else {

            this.setState({ isShowDialog: true })

        }
    }

    handleChange(e, name) {
        this.props.eventChange(e.target.value, name)
    }

    handleClose() {
        this.setState({ isShowDialog: false })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange(e, 'user')} placeholder="username" value={this.props.user} />

                <input type="password" onChange={(e) => this.handleChange(e, 'pass')} placeholder="password" value={this.props.pass} />

                <button onClick={this.handleLogin}>Login</button>

                {this.state.isShowDialog ? <ShowModal handleClose={this.handleClose} /> : ''}
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


        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(value, name) {
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