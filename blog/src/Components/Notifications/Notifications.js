import React from "react";
import styled from "styled-components";
import "./Notifications.css";
import ee from "../../events";

const AlertContainer = styled.div`
                color: white;
                padding: 10px;
                position: absolute;
                top: ${props => props.top}px;
                right: 10px;
                zIndex: 1000;
`;

// const emitter = new ee();

// export const notify = (message) => {
//     emitter.on('notification', function (meesage) {
//         console.log(message)
//       })
// emitter.emit('notification', message);
// }

export default class Notifications extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            top: -100,
            message: ''

        }

        this.timeout = null;

        ee.on('notification', (message) => {
            console.log(message);
        })

        this.showNotification.bind(this)
    }

    showNotification(message) {
        console.log(message);
        ee.emit('notification', message);
        this.setState({
            top: 100,
            message: message
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    top: -100,
                });
            }, 2000);
        })
    }

    render() {
        return (

            <React.Fragment >
                <AlertContainer className="notification" top={this.state.top}>
                    {this.state.message}
                </AlertContainer>
                <button className="btn" onClick={() => this.showNotification('Notification')}>Click</button>
            </React.Fragment>

        );
    }

}
