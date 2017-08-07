import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createBrowserHistory from 'history/createBrowserHistory'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import '../'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../action/ship.action'

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
        this.handleClose = this.handleClose.bind(this)
    }


    handleLogin() {
        const { login } = this.props
        if (login.user !== '' && login.pass !== '') {
            const history = createBrowserHistory({
                basename: '/',
                forceRefresh: true
            })
            history.listen(location => {
                console.log(location.pathname)
            })
            history.push('/test')
        } else {

            this.props.actions.changeShowing(true)

        }
    }

    handleChange(e, name) {
        this.props.actions.changeText(e.target.value, name)
    }

    handleClose() {
        const { login } = this.props
        this.props.actions.changeShowing(false)
    }

    render() {
        const { login } = this.props

        return (
            <div>
                <input type="text" placeholder="username" value={login.user} onChange={(e) => this.handleChange(e, 'user')} />

                <input type="password" placeholder="password" value={login.pass} onChange={(e) => this.handleChange(e, 'pass')} />

                <button onClick={this.handleLogin}>Login</button>

                {login.isShowing? <ShowModal handleClose={this.handleClose} /> : ''}
            </div>
        );
    }
}

class FormLogin extends Component {


    // handleChange(value, name) {
    //     this.setState({ [name]: value })
    // }

    render() {

        return (
            <div className="container">
                <Login />

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        login: state.login,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)