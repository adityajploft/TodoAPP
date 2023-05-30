import React from 'react';
import { TodoProvider } from './components/TodoContext';
import Toodo from './components/Toodo';

const App = () => {
  return (
    <TodoProvider>
     <Toodo/>
    </TodoProvider>
  );
};

export default App;
