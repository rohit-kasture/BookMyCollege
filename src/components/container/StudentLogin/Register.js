import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import history from '../../../history/history';
import { Link } from 'react-router-dom';

class Register extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };
    renderPassword = ({ input, label, meta }) => {
        console.log("meta = "+JSON.stringify(meta))
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type="password" autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.postUser(formValues,this.props.isDoctor);
        //console.log(formValues + " AND this.props= " + );
        //this.props.postUser(JSON.stringify(formValues));
        history.push('/login')
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="fullname" component={this.renderInput} label="Full Name" />
                <Field name="number" component={this.renderInput} label="Mobile Number" type="mobile" />

                <Field
                    name="password"
                    component={this.renderPassword}
                    label="Create Password"
                />
                <button className="ui button primary">Register</button>

                <small>
                    {!this.props.isStudent && `Are you a Student?`}
                </small>
                {
                    this.props.isStudent ?  <Link to="/register" onClick={() => this.props.toggleIsStudent(false)} >Not a Student?</Link>
                        :
                   <Link to="/register" onClick={() => this.props.toggleIsStudent(true)} >Register Here</Link>
                }
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.userId) {
        errors.userId = 'Please enter userId';
    }
    if (!formValues.email) {
        errors.email = 'Please enter email Id';
    }

    if (!formValues.password) {
        errors.password = 'Password can not be empty';
    }
    return errors;
};
const readState = (state) => {
    return { isDoctor: state.data.isDoctor }
}
const decoratedComponent = connect(readState,
    { })(Register);

export default reduxForm({
    form: 'RegisterUser',
    validate
})(decoratedComponent);
