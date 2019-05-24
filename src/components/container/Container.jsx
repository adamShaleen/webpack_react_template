import React, { useState } from "react";
import ReactDOM from "react-dom";
import Presentational from "../presentational/Presentational.jsx";
import "./Container.css";

const Container = () => {
    const [count, setCount] = useState(0);

    return (
        <section id="container">
            <p>Container component</p>
            <span>Change the count: &nbsp;</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <Presentational count={count} />
        </section>
    )
}

ReactDOM.render(<Container/>, document.getElementById("root"));