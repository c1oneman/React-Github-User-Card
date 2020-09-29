import React from "react";
import "../App.scss";

class Usercard extends React.Component {
    render() {
        const user = this.props.data;
        return (
            <div className='card'>
                <div className='titleBar'>
                    <div className='name'>
                        <h1>{user.name === undefined ? user.login : ''}{user.name}</h1>
                    </div>
                    <div className='profile'>
                        <img className='profileImg' src={user.avatar_url} alt={user.name} />
                    </div>

                </div>
                <div className='details'>
                    <p><i className="fas fa-id-badge" /> {user.login}</p>
                    <p><i className="fas fa-location-arrow" /> {user.location}</p>
                    <p><i className="fas fa-user-friends"/> {user.followers} | {user.following}</p>
                </div>
                <div className = 'center'>
                <a href={user.html_url} rel="noopener noreferrer" target = '_blank'>Open Profile</a>
                </div>
                
            </div>
        );
    }
}

export default Usercard;