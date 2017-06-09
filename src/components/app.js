import React, { Component } from 'react';
import ViewList from './view_list';
import AddForm from './add_form';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        };
        this.BASE_URL = 'http://api.scottbowlerdev.com';
        this.API_KEY = '?key=c417m00ncake';
    }

    componentDidMount() {
        this.getData();
    }

    getData(){
        axios.get(`${this.BASE_URL}/todos${this.API_KEY}`).then((resp) => {
            console.log(resp);
            console.log('componentDidMount server response:', resp.data.todos);

            this.setState({
                list: resp.data.todos
            });
        });
    }

    addItem(item){
        axios.post(`${this.BASE_URL}/todos${this.API_KEY}`, item).then((resp) => {
            console.log('Server resp: ', resp.data.success);
            if(resp.data.success){
                this.getData();
            }
        });
    }

    deleteItem(id) {
        console.log('Item id of item to be deleted: ', id);
        axios.delete(`${this.BASE_URL}/todos/${id + this.API_KEY}`).then((resp) => {
            console.log('Response from Delete:', resp);
            if(resp.data.success){
                this.getData();
            }
        });

    }

    toggleComplete(id) {
        console.log('Toggled Completed item:', id);
        axios.put(`${this.BASE_URL}/todos/${id + this.API_KEY}`).then((resp) => {
            console.log('Response from Completed: ', resp);
            if(resp.data.success){
                this.getData();
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h1>To Do List</h1>
                <AddForm add={(item) => this.addItem(item)}/>
                <ViewList
                    list={this.state.list}
                    delete={(index) => this.deleteItem(index)}
                    complete={(index) => this.toggleComplete(index)}
                />
            </div>
        )
    }
};

export default App;
