import React from 'react';
import FeedContext from "../../contexts/FeedContext";
import TokenService from '../../services/token-service';
import { Link } from "react-router-dom";

// functional component
class AccountPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = FeedContext
    // return BlogPost component html/(JSX)

    renderGuest() {
        return (
            <Link
                className="side-panel-content"
                to='/create_post'>
                <p >
                    Guest
                </p>
            </Link>
        )
    }

    renderUser() {
        return (
            <div
                className="side-panel-content"
                to={`/account/${localStorage.getItem('user')}`}>
                <p >
                    User: {localStorage.getItem('user')}
                </p>
            </div>
        )
    }

    render() {
        return (
            <section>
                {TokenService.hasAuthToken()
                    ? this.renderUser()
                    : this.renderGuest()}
            </section>
        )
    }
}

export default AccountPanel;