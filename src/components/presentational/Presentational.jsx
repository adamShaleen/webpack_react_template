import React from "react";
import PropTypes from "prop-types";

const Presentational = ({ title }) => {
    return (
        <section id="presentational">
            <h3>{title}</h3>
            <p>This is a presentational component</p>
        </section>
    )
}

Presentational.propTypes = {
    title: PropTypes.string.isRequired
}

export default Presentational;