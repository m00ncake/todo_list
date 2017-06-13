import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetch_all } from '../actions/index';

class ViewList extends Component {

    componentDidMount() {
        this.props.fetch_all();
    }

    render() {
        const list = this.props.todos.map((item, index) => {
            return (
                <li className='list-group-item' key={index}>
                    <Link to={`/todo/${item._id}`}>{item.title}</Link>
                </li>
            )
        });

        return(
            <div>
                <ul className='list-group'>{list}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.all
    }
}

export default connect(mapStateToProps, { fetch_all })(ViewList);