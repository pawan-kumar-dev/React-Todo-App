import React from "react";
const Header = (props) => {
     return (
          <h2
               style={{
                    margin: "0",
                    fontSize: "1.2rem",
                    color: "white",
                    fontWeight: "bold",
                    border: "2px solid white",
                    padding: "5px",
                    marginBottom: "5px",
               }}
          >
               Total {props.data.length} Todos are pending
          </h2>
     );
};
export default Header;
