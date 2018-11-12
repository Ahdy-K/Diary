import React, {Component} from 'react'
import {  Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {getUser, logout} from '../actions/userAction'

class Navbar extends Component{
    componentDidMount() {
        console.log(this.props.user);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Diary</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                            {this.props.user === null ?
                                (<li>
                                    <Link to="/login">Login</Link>
                                </li>) : (
                                <li>
                                    <Link to="/login" onClick={()=>this.props.logout()}>Logout</Link>
                                </li>)}
                    </ul>
                    </div>
            </div>
        </nav>
    
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser, logout})(Navbar)