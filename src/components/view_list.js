import React, { Component } from 'react';

class ViewList extends Component {
    render(){
        const listElements = this.props.list.map((item, index) => {

           return (
               <li className="list-group-item" key={index}>
                   {`${item.title} | completed: ${item.completed}`}
                   <span className="ml-auto">
                       <button
                           onClick={() => this.props.delete(index)}
                           className="btn btn-outline-danger btn-sm">
                           Delete
                       </button>
                       <button
                           onClick={() => this.props.complete(index)}
                           className="btn btn-outline-warning btn-sm">
                           {item.completed ? 'Restore' : 'Complete'}
                       </button>
                   </span>
               </li>
           );
        });
        console.log('List data: ', listElements);
        return (
            <div>
                <ul className="list-group">
                    {listElements}
                </ul>
            </div>
        )
    }
}

export default ViewList;