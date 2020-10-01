import React from 'react';

const Todos = (props) => {
    const {deleteTodo, todos} = props;
    const todoList = todos.length ? 
    (
        todos.map( todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You don't have any todos left</p>
    )

    return(
       <div className="todos collection">
            {todoList}
       </div>
   ) 
}

export default Todos;