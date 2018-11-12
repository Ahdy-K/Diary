import React, { Component } from 'react';
import { connect } from 'react-redux'
import {githubLogin, googleLogin} from '../actions/userAction'

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron">
                        <h1>
                            Login using one of these  accounts
                        </h1>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger btn-lg"
                            onClick={this.props.googleLogin}
                        >
                            Login with Google
                        </button>
                        <br />
                        <button className="btn btn-dark btn-lg"
                            onClick={this.props.githubLogin}
                        >
                            Login with Github
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {googleLogin, githubLogin})(Login);