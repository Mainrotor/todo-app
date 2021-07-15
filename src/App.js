import React, {Component} from 'react'
import TodoCard from './TodoCard'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      text: ''
    }
  }

  

  onChangeHandler = (e) => {
    this.setState({text : e.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.setState({todos : [...this.state.todos, this.state.text]})
    this.setState({text : ''})
  }

  deleteItem = (index) => {
    var array = [...this.state.todos];
    array.splice(index, 1);
    this.setState({todos : array});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo, index) => {
            return <TodoCard title={todo} clickToDelete={this.deleteItem} key={index} index={index}/>
          })}
        </ul>

        <section>
          <form onSubmit={this.submitHandler}>
            <input type="text"  value={this.state.text} onChange={this.onChangeHandler}></input>

            <button type="submit"><p>submit</p></button>
          </form>
        </section>
        
        
        

      </div>
    );

  }

  
}

export default App;
