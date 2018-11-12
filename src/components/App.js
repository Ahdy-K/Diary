import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getNotes, saveNote, deleteNote } from '../actions/notesAction'
import {Note} from './Note'
import { getUser } from '../actions/userAction'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      body:'',
    }
  }
  /*componentDidMount(){
    this.props.getNotes()
    this.props.getUser()
  }*/


  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  handleSubmit= e =>{
    e.preventDefault()
    console.log('D O N E ! 🎉')
    const note={
      title: this.state.title,
      body: this.state.body
    }
    this.props.saveNote(note)
    this.setState({
      title: '',
      body:''
    })
  }


  render() {
    // Rendering N O T E S 
    let note = Object.keys(this.props.notes).map((key)=>
      {
        
      return (<Note key={key}>
        <h4>{this.props.notes[key].title}</h4>
          <p>{this.props.notes[key].body} </p>
          <button className="btn btn-danger btn-xs"
            onClick={()=> this.props.deleteNote(key)}
          >Delete</button>
        </Note>)
      }
    )

    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="title"
              onChange={this.handleChange}
              value={this.state.title}
              name="title" required
              className="form-control no-border" />
            </div>
            <div className="form-group">
              <textarea type="text" placeholder="body"
              name="body" required
              value={this.state.body}
              onChange={this.handleChange}
              className="form-control no-border" />
            </div>
            <div className="form-group">
              <button 
              className="btn btn-black col-sm-12">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <ul>
            { note}
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    
  }
}
export default connect(mapStateToProps, {getNotes, saveNote, deleteNote, getUser})(App);
