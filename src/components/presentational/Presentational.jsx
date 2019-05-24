import React from "react";
import PropTypes from "prop-types";
import "./Presentational.css";

const Presentational = ({ count }) => {
    return (
        <section id="presentational">
            <p>Presentational component</p>
            <span>Count: {count}</span>
        </section>
    )
}

Presentational.propTypes = {
    count: PropTypes.number.isRequired
}

export default Presentational;