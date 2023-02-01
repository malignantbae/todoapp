import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';



function TodoCounter({total, completed}) {
    const { totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">You have complete {completedTodos} of {totalTodos} task</h2>
    );
    
}
export {TodoCounter};