import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import FormSubmit from "./Components/FormSubmit";
function App() {
     const [data, setData] = useState({
          tasks: ["Excersice", "Have a Bath", "Get Started"],
     });
     const Delete = (id) => {
          const newTasks = [...data.tasks];
          newTasks.splice(id, 1);
          setData({
               tasks: newTasks,
          });
     };
     const [load, setLoad] = useState(true);
     useEffect(() => {
          setTimeout(() => {
               setLoad(false);
          }, 3000);
     }, []);
     const AddTask = (value) => {
          const newArr = [...data.tasks];
          newArr.push(value);
          setData({
               tasks: newArr,
          });
     };
     const App = load ? (
          <div className={classes.loading}></div>
     ) : (
          <div className={classes.TodoApp}>
               <Header data={data.tasks} />
               <FormSubmit AddTask={AddTask} />
               <TodoList data={data.tasks} Delete={Delete} />
          </div>
     );
     return <div className={classes.App}>{App}</div>;
}
export default App;
