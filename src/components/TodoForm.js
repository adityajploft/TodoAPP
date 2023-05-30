// import { useContext } from 'react';
// import { TodoContext } from './TodoContext';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { validationSchema } from '../utils/validationSchema';

// const TodoForm = () => {
// //   const { dispatch } = useContext(TodoContext);
//   const { state, dispatch } = useContext(TodoContext);
//   const { todos } = state;


//   const handleSubmit = (values) => {

    
//     const newTodo = {
//       id: Date.now(),
//       name: values.name,
//       email: values.email,
//       address: values.address,
//       done: false,
//     };

 
//     dispatch({ type: 'ADD_TODO', payload: newTodo });
//     // setName("");
//     // setEmail("");
//     // setAddress("");
//   };
// //
//   const handleDelete = (id) => {

//     dispatch({ type: 'DELETE_TODO', payload: id });
//   };

//   const handleUpdate = (id, updatedTodo) => {
    
//     dispatch({ type: 'UPDATE_TODO', payload: { id, updatedTodo } });
//   };

//   const handleDone = (id) => {

//     dispatch({ type: 'MARK_AS_DONE', payload: id });
//   };
  
  
//     return (
//       <>
//         <h1>Todo</h1>
//         <div className='todoss'>
//         <Formik
//           initialValues={{ name: '', email: '', address: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
           
//           <Form>
          
//               <Field type="text" name="name" placeholder="Name" />
//               <ErrorMessage name="name" component="div" />
  
//               <Field type="email" name="email" placeholder="Email" />
//               <ErrorMessage name="email" component="div" />
  
//               <Field type="text" name="address" placeholder="Address" />
//               <ErrorMessage name="address" component="div" />
  
//               <button type="submit">Add</button>
          
//           </Form>
       
//         </Formik>
//         </div>
//         <div>
//         <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
//             {todo.name}, {todo.email}, {todo.address}
//           </span>
//           {!todo.done && (
//             <>
//               <button onClick={() => handleUpdate(todo.id)}>Update</button>
//               <button onClick={() => handleDelete(todo.id)}>Delete</button>
//               <button onClick={() => handleDone(todo.id)}>Done</button>
//             </>
//           )}
//           {todo.done && <span>Done</span>}
//         </li>
//       ))}
//     </ul>
//         </div>
//       </>
//     );
//   };
  
//   export default TodoForm;


