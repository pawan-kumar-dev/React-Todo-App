import React, { useState, useEffect } from "react";
const FormSubmit = (props) => {
     const [data, setData] = useState({
          data: "",
     });
     const myRef = React.createRef();
     useEffect(() => {
          myRef.current.focus();
     });
     const handleSubmit = (e) => {
          e.preventDefault();
          if (data.data === "") return;
          props.AddTask(data.data);
          setData({
               data: "",
          });
     };
     return (
          <form style={{ marginBottom: "0.5rem" }} onSubmit={handleSubmit}>
               <input
                    ref={myRef}
                    required
                    type="text"
                    name="text"
                    value={data.data}
                    onChange={(e) => {
                         setData({ data: e.target.value.substr(0, 40) });
                    }}
                    style={{
                         width: "100%",
                         display: "block",
                         maxWidth: "300px",
                         padding: "6px 0px",
                         fontSize: "0.8rem",
                         textAlign: "center",
                         borderRadius: "10px",
                         outline: "none",
                         border: "none",
                         margin: "0 auto 5px auto",
                    }}
               />
               <div>
                    {data.data.length >= 40 &&
                         "Reached a limit of 40 characters"}
               </div>
               <button
                    style={{
                         width: "30%",
                         backgroundColor: "white",
                         outline: "none",
                         border: "none",
                         padding: "3px 0px",
                         fontSize: "0.8rem",
                         cursor: "pointer",
                    }}
               >
                    Add Todo
               </button>
          </form>
     );
};
export default FormSubmit;
