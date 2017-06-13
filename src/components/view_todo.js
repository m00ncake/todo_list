import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_one } from '../actions/index';

class ViewTodo extends Component {

    componentDidMount(){
        console.log('ViewTodo props: ', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
    }

    render() {
        console.log('Single Todo: ', this.props.todo);
        const { todo } = this.props;

        if(!todo){
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <Link to="/" className="btn btn-outline-primary">Back To List</Link>
                <h1>Title: {todo.title}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, {get_one})(ViewTodo);