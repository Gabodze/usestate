import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";

// Class App extends React.Component{

//     constructor(){
//         super();

//         this.state = {
//             name: "John",
//             lastname: "Doe"
//         }
//     }


//     render(){
//         return(
//             <React.Fragment>
//                 {
//                     this.state.name + " " + this.state.lastname
//                 }
//             </React.Fragment>
//         )
//     }
// }


function App() {
    const [name, setName] = useState("mariam");

    return(
        <Fragment>
            <h1>{ name }</h1>
        </Fragment>
    )
}

export default App;
