import React from "react";
const Todo = (props) => {
     const style = {
          width: "80%",
          justifyContent: "space-between",
          textAlign: "left",
          border: "2px solid green",
          marginBottom: "4px",
          padding: "2px",
          boxSizing: "border-box",
          backgroundColor: "wheat",
     };
     return (
          <div
               style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "2px solid yellow",
                    marginBottom: "3px",
                    padding: "5px 0 0 2px",
               }}
          >
               <div style={style}>
                    <p style={{ wordBreak: "break-all", margin: "0 5px" }}>
                         {props.content}
                    </p>
               </div>
               <div
                    onClick={props.Delete}
                    style={{
                         border: "3px solid red",
                         width: "15px",
                         height: "15px",
                         borderRadius: "50%",
                         backgroundColor: "red",
                         cursor: "pointer",
                    }}
               ></div>
          </div>
     );
};
export default Todo;
