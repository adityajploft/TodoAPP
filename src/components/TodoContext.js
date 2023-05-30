import  { createContext, useReducer } from 'react';

const initialState = {
  todos: []
};

export const TodoContext = createContext(initialState);

const todoReducer = (state, action) => {
  switch (action.type) {
    // FOR ADD ka liye
    case 'ADDTODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
  // delete wqla
    case 'DELETETODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload.updatedTodo };
          }
          return todo;
        })
      };

      // return {
      //   ...state,
      //   todos: state.todos.map(todo => {
      //     if (todo.id === action.payload) {
      //       return { todo, done: true };
      //     }
      //     return todo;
      //   })
      // };


      // underline when done
    case 'DONE':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, done: true };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
