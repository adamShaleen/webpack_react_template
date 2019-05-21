import React from "react";
import ReactDOM from "react-dom";
import Presentational from "../presentational/Presentational.jsx";
import "./Container.css";

const Container = () => {
    return (
        <section id="container">
            <p>This is the container component</p>
            <Presentational title="This is a title" />
        </section>
    )
}

ReactDOM.render(<Container/>, document.getElementById("root"));