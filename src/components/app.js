import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import ViewList from './view_list';
import ViewTodo from './view_todo';

const App = () => (
    <Router>
        <div className="container">
            <h1>To Do List</h1>
            <Route exact path="/" component={ViewList}/>
            <Route path="/todo/:id" component={ViewTodo}/>
        </div>
    </Router>
);

export default App;
