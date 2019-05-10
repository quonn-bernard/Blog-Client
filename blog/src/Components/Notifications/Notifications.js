import React from "react";
import "./Notifications.css";

export default class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.timeout = null;
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    color: "white",
                    padding: "10px",
                    position: "absolute",
                    top: `${this.props.top}px`,
                    right: "10px",
                    zIndex: "1000",
                    borderRadius: "5px"
                }} className="notification">
                    {this.props.message}
                </div>
            </React.Fragment>
        )
    }

}

