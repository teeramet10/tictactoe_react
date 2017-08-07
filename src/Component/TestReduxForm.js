import { createStore, combineReducers } from 'redux'
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class TestReduxForm extends Component {


    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        const store = ''
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name </label>
                </div>
                <div>
                    <Field name="name"
                        component="input"
                        type="text"
                        placeholder="Name" />
                </div>

                <div>
                    <label> Email </label>
                </div>
                <div>
                    <Field name="email"
                        component="input"
                        type="email"
                        placeholder="Email" />
                </div>

                <div>
                    <label> Sex </label>
                </div>
                <div>
                    <label>
                        <Field name="sex"
                            component="input"
                            type="radio"
                            value="male" />{' '}
                        Male</label>

                    <label>
                        <Field name="sex"
                            component="input"
                            type="radio"
                            value="female" />{' '}
                        Female</label>
                </div>
                <div>
                    <label>Favorite Color</label>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'simple'
})(TestReduxForm)
