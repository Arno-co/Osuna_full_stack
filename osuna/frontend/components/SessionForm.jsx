import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {this.setState({ [field]: e.currentTarget.value })}
    }

    addUsername() {
        if (this.props.formType === 'SIGN UP') {
            return (<>
                <label>Username:
                            <input type="text" value={this.state.username} onChange={this.update('username')} />
                </label>
            </>)
        } 
        else {
            return ''
        }
    }
    
    addLink() {
        if (this.props.formType === 'SIGN IN') {
            return (<>
                <br/>
                <Link to="/signup">SIGN UP INSTEAD</Link>
                </>)
        } else {
            return (<>
            <br/>
                <Link to="/login">SIGN IN INSTEAD</Link>
            </>)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <br/>
                {this.addUsername()}
                <br/>
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <br/>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')}/>
                </label>
                <br/>
                <input type="submit" value={this.props.formType}/>
                {this.addLink()}
            </form>
        )
    }
}

export default SessionForm;