import React from "react";
import styled from "styled-components";
import "./Notifications.css";
import { NotificationConsumer } from "../../NotificationContext/NotificationContext";


export default class Notifications extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            top: -100,
            message: ''
        }

        this.timeout = null;
    }


    render() {
        return (
            <NotificationConsumer>
                {value => (
                    <React.Fragment>
                        <div style={{
                            color: "white",
                            padding: "10px",
                            position: "absolute",
                            top: `${value.top}px`,
                            right: "10px",
                            zIndex: "1000"
                        }} className="notification" >
                            {value.message}
                        </div>
                        top: {value.top}
                        <button className="btn" onClick={() => value.updatePosition()}>TEST NOTIFICATION</button>
                    </React.Fragment>
                )
                }
            </NotificationConsumer>
        );
    }

}

