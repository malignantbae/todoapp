import React from "react";
import { useTodos } from "./useTodos";

import { TodoHeader } from "../TodoHeader";
import {TodoCounter} from "../TodoCounter";
import {TodoItem} from "../TodoItem";
import {TodoForm} from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import {EmptyTodos} from "../EmptyTodos";
import {TodoList} from "../TodoList";
import {TodoSearch} from "../TodoSearch";
import {CreateTodoButton} from "../CreateTodoButton"; 
import {Modal} from "../Modal";


function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    } = useTodos();

    return(
      <React.Fragment>
      
        <TodoHeader loading={loading}>
          <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            //loading={loading}
          />
          {/* <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            //loading={loading}
          /> */}
          
        </TodoHeader>


            <TodoList 
              error={error}
              loading={loading}
              searchedTodos={searchedTodos}
              totalTodos={totalTodos}
              searchText={searchValue}
              onError={() => <TodosError />}
              onLoading={() => <TodosLoading />}
              onEmptyTodos={() => <EmptyTodos />}
              onEmptySearchResults={(searchText)=> <p> Not found Results for: 
                {searchText} 
              </p>
              }

              /* render={todo => (
                <TodoItem 
                          key={todo.text} 
                          text={todo.text} 
                          completed={todo.completed}
                          onComplete={() => completeTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                          />
              )} */
            
            >

              {todo => (
                <TodoItem 
                          key={todo.text} 
                          text={todo.text} 
                          completed={todo.completed}
                          onComplete={() => completeTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                          />
              )}
           </TodoList>

        

     {!!openModal && (
      <Modal>
        <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
        />
      </Modal>
     )}

    <CreateTodoButton 
      setOpenModal ={setOpenModal}
    />
    </React.Fragment>
  );
}

export default App;
