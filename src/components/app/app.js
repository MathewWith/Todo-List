import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

  maxId = 100;

  state = {
     todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id)
      
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
    
        return[
          ...arr.slice(0, idx),
          newItem,
          ...arr.slice(idx + 1)
        ] 
  }

  deletItem = (id) => { 
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      
      // [a,b,c,d,e]
      // [a,b,  d,e]
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)]
        
      return {
      todoData: newArray
      }
    })
  }

  onSearchChenge = (term) => {
    this.setState({term})
  };

  
  onFilterChenge = (filter) => {
    this.setState({filter})
  };

  search(items, term){
    if(term.length === 0){
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    } )
  }


  filter(items, filter) {
    switch(filter){
      case 'all' :
        return items;
      case 'active' :
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default: 
        return items;
    }
  }
   

  render() {
    const {todoData, term, filter} = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = this.state.todoData.filter((el) => el.done).length;

    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
          onSearchChenge = {this.onSearchChenge}/>
          <ItemStatusFilter 
            filter={filter}
            onFilterChenge = {this.onFilterChenge}/>
        </div>
  
        <TodoList todos={visibleItems} 
        onDeleted = {this.deletItem}
        onToggleDone = {this.onToggleDone}
        onToggleImportant = {this.onToggleImportant}/>

        <ItemAddForm onItemAdded = {this.addItem}/>
      </div>
    );
  };
  }
  

