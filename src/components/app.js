import React, { Component } from 'react';
import listData from './data/todo_data';
import ViewList from './view_list';
import AddForm from './add_form';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: listData
        }
    }

    addItem(item){
        item.completed = false;
        const { list } = this.state;

        this.setState({
            list: [item, ...list]
        });
    }

    deleteItem(index) {
        const { list } = this.state;
        list.splice(index,1);
        this.setState({
            list: [...list]
        })
    }

    toggleComplete(index) {
        const { list } = this.state;
        list[index].completed = !list[index].completed;
        this.setState({
            list: [...list]
        })
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
