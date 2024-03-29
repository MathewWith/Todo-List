import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  // state = {
  //   done: false,
  //   important: false
  // };

  // // onLabelClick = () => {
  // // this.setState(({done}) => {
  // //   return {
  // //     done:!done
  // //   }
  // // })
  // // };


  // // onMarkImportant = () => {
  // //   this.setState(({important}) => {
  // //     return { 
  // //       important: !important
  // //     }
  // //   })
  // // };

  render (){

    const {label, onDeleted,
       onToggleImportant,
       onToggleDone,
       done, important} = this.props


    

    let className = "todo-list-item"
    if (done) {
      className += " done"
    }
    
    if(important){
      className += ' important'
    }

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick = {onToggleDone}>
          {label}
        </span>
  
        <button type="button" id = "button-right"
                className="btn btn-outline-danger btn-sm float-right"
                onClick = {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
  
  
        <button type="button" id = "button-right"
                className="btn btn-outline-success btn-sm float-right"
                onClick = {onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}

