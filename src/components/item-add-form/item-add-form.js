import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {

    render() {
        return (
            <div className = "item-add-form"
            onClick = {() => {this.props.onItemAdded('Hello World')}}>
                <button className="btn btn-outline-secondary">Add Item</button>
            </div>
        )

    }
}