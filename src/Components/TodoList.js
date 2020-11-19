import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
     const todo = props.data.map((item, index) => {
          return (
               <Todo
                    content={item}
                    key={index}
                    id={index}
                    Delete={() => props.Delete(index)}
               />
          );
     });
     return <>{todo}</>;
};
export default TodoList;
