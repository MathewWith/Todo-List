import React from 'react'
import ReactDOM from 'react-dom'


const AppHeder = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Builde Awesome App</li>
        </ul>
    );
};

const SearchPanel = () => {
    return <input placeholder = "search" /> ;
}

const App = () => {
   return (
    <div>
        <AppHeder/>
        <SearchPanel/>
        <TodoList/>
    </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));
