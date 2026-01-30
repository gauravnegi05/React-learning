import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id, todo) => {},
    updateTodo: (id) => {},
    toogleComplete: (id) => {}
});

export const useToDo = () => {
  return useContext(ToDoContext);
};


export const ToDoprovider = ToDoContext.Provider