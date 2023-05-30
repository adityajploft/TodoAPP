import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../utils/validationSchema";
import { v4 as uuidv4 } from "uuid";

const Toodo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { todos } = state;
  const [editTodoId, setEditTodoId] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    const newTodo = {
      // id: Date.now(),
      id:uuidv4(),
      // for updateing 
      name: values.name,
      email: values.email,
      address: values.address,
      password: values.password,
      done: false,
    };

    dispatch({ type: "ADDTODO", payload: newTodo });
    resetForm();
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETETODO", payload: id });
  };

  const handleUpdate = (id) => {
    setEditTodoId(id);
  };

  const handleSaveUpdate = (id, updatedTodo) => {
    dispatch({ type: "UPDATE", payload: { id, updatedTodo } });
    // dispatch({ type: "UPDATETODO", payload: { id, updatedTodo } });
    setEditTodoId(null);
  };

  const handleDone = (id) => {
    dispatch({ type: "DONE", payload: id });
  };

  return (
    <>
      <h1>TodoList</h1>
      <div className="todoss">
        <Formik
          initialValues={{ name: "", email: "", address: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />

            <Field type="text" name="address" placeholder="Address" />
            <ErrorMessage name="address" component="div" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit">Add</button>
          </Form>
        </Formik>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {todos.map((element,index)=>(
              
            ))} */}
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editTodoId={editTodoId}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleSaveUpdate={handleSaveUpdate}
                setEditTodoId={setEditTodoId}
                handleDone={handleDone}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const TodoItem = ({
  todo,
  editTodoId,
  handleDelete,
  handleUpdate,
  handleSaveUpdate,
  setEditTodoId,
  handleDone,
}) => {
  const { id, name, email, address, password, done } = todo;
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedAddress, setUpdatedAddress] = useState(address);
  const [updatedPassword, setUpdatedPassword] = useState(password);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setUpdatedName(value);
    } else if (name === "email") {
      setUpdatedEmail(value);
    } else if (name === "address") {
      setUpdatedAddress(value);
    } else if (name === "password") {
      setUpdatedPassword(value);
    }
  };

  const handleUpdateSave = () => {
    const updatedTodo = {
      name: updatedName,
      email: updatedEmail,
      address: updatedAddress,
      password: updatedPassword,
    };

    handleSaveUpdate(id, updatedTodo);
  };

  const handleUpdateCancel = () => {
    setEditTodoId(null);
  };

  return (
    <tr>
      <td>
        {editTodoId === id ? (
          <input
            type="text"
            name="name"
            value={updatedName}
            onChange={handleUpdateChange}
          />
        ) : (
          <span style={{ textDecoration: done ? "line-through" : "none" }}>
            {name}
          </span>
          // <span style={{ textDecoration: done ?\
          //  "------------" : "" }}>
          //   {name}
          // </span>
        )}
      </td>
      <td>
        {editTodoId === id ? (
          <input
            type="email"
            name="email"
            value={updatedEmail}
            onChange={handleUpdateChange}
          />
        ) : (
          <span style={{ textDecoration: done ? "line-through" : "none" }}>
            {email}
          </span>
        )}
      </td>
      <td>
        {editTodoId === id ? (
          <input
            type="text"
            name="address"
            value={updatedAddress}
            onChange={handleUpdateChange}
          />
        ) : (
          <span style={{ textDecoration: done ? "line-through" : "none" }}>
            {address}
          </span>
        )}
      </td>
      <td>
        {editTodoId === id ? (
          <input
            type="password"
            name="password"
            value={updatedPassword}
            onChange={handleUpdateChange}
          />
        ) : (
          <span style={{ textDecoration: done ? "line-through" : "none" }}>
            {password}
          </span>
        )}
      </td>

      <td>
        {editTodoId === id ? (
          <>
            <button onClick={handleUpdateSave}>Save</button>
            <button onClick={handleUpdateCancel}>Cancel</button>
          </>
        ) : (
          <>
            {!done && (
              <>
                <button onClick={() => handleUpdate(id)}>Update</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button onClick={() => handleDone(id)}>Done</button>
              </>
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default Toodo;
