import React, { Component } from "react";
import { Container, Title, Form, TextInput, TodoList, TodoListItem } from "./styles";




export default class Main extends Component {


    state = {
        todos: [],
        newTodo: ""
    };


    handleKeyDown = e => {

        const { newTodo } = this.state;

        if (e.keyCode === 13 && newTodo) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        text: newTodo,
                        completed: false
                    }
                ],
                newTodo: ""


            });
            // console.log(this.state.todos);
            // const bosta = this.state.todos;
            // console.log("i Bosta" + bosta);

            localStorage.setItem('@tarefas-app/padre', this.state.todo);


            // // //this.state.todos = localStorage.getItem('@tarefas-app/jesus');
            // // //this.setState.todos = localStorage.getItem('@tarefas-app/jesus');


            console.log(localStorage.getItem('@tarefas-app/padre'))


        }
    };


    handleToggle = index => {
        const { todos } = this.state;
        const todo = todos[index];

        todo.completed = !todo.completed;

        this.setState({ ...this.state, todos });
        //console.log(this.state);






    };

    render() {

        return (

            < Container >
                <Title>Tarefas</Title>

                <Form onSubmit={e => e.preventDefault()}>
                    <TextInput
                        placeholder="O que preciso fazer?"

                        value={this.state.newTodo}
                        onChange={e =>
                            this.setState({ ...this.state, newTodo: e.target.value })
                        }
                        onKeyDown={this.handleKeyDown}
                    />
                    <TodoList>

                        {this.state.todos.map((todo, index) => (
                            <TodoListItem key={index} item={todo}>
                                <div>
                                    <input
                                        type="checkbox"
                                        onClick={e => this.handleToggle(index)}
                                        checked={todo.completed}
                                    />

                                    {localStorage.setItem('@tarefas-app/jesus', todo.text)}
                                    <label>{localStorage.getItem('@tarefas-app/jesus')}</label>
                                </div>
                            </TodoListItem>
                        ))}
                    </TodoList>
                </Form>
            </Container >
        );
    }
};



