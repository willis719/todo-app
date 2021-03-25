import React from 'react'

class AddTask extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            text: ''
        }
    }


    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.trim() === '') {
            return;
        }
        // create a copy of todos in state
        const newTodos = [...this.state.todos];
        // add new todo to new array
        newTodos.push(this.state.text.trim());
        this.setState({
            todos: newTodos,
            text: ''
        })
    }

    handleDelete = (index) => {
        // make copy of state
        const newTodos =[...this.state.todos];
        // slice out item at 'index'
        newTodos.splice(index, 1);
        // set state
        this.setState({
            todos: newTodos
        });
    }


    render() {
        return(
            <div>
                <h1>Add Task</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Add Task</label><br/>
                    <input type="text" value={this.state.text} onChange={this.handleChange} name="todo" required />
                    <button type="submit" value="submit" >Add</button>
                </form>
                <h1>My Tasks</h1>
                {
                    this.state.todos.map((todo, index) => {
                        return (
                            <div className='todo' key={index}>
                                <span>{todo}</span>
                                <button onClick={() => this.handleDelete(index)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AddTask;