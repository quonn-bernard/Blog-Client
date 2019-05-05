import React from 'react';
import FeedContext from "../../contexts/FeedContext";

// functional component
class AccountPanel extends React.Component {
    
    static contextType = FeedContext
    // return BlogPost component html/(JSX)

    renderUserInfo(){
        const user = this.context.user;
        this.context.setUser('y')
        console.log(this.context)
        console.log(this.context.user)
    }

    render(){
        return (
        
            
            <section>
                { this.renderUserInfo() }
               AccountPanel
    
            </section>
        )
    }
    
}

export default AccountPanel;