import React, { Component } from 'react';

export default class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                title: '',
                description: ''
            }
        }

    }

    handleInputChange(event, type){
        console.log('event: ', event.target.value);

        const { form } = this.state;

        form[type] = event.target.value;

        this.setState({
            form: { ... form }
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted: ', this.state.form);
        const { form } = this.state;
        this.props.add(form);
        this.setState({
            form: {
                title: '',
                description: ''
            }
        })
    }

    render() {
        const { form } = this.state;
        return (
            <form onSubmit={(event) => this.handleFormSubmit(event)} className="form-inline">
                <input
                    value={form.title}
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Title"
                    onChange={(event) => this.handleInputChange(event, 'title')}
                />
                <input
                    value={form.description}
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Description"
                    onChange={(event) => this.handleInputChange(event, 'description')}
                />
                <button className="btn btn-outline-success">Add Item</button>
            </form>
        )
    }
}