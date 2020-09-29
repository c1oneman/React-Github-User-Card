import React from "react";
import "./App.scss";
import Usercard from './components/usercard'
class App extends React.Component {
  state = {
    data: [],
    followerdata: [],
    user: "c1oneman"
  };

  componentDidMount() {
    this.fetchUser(this.state.user);
  }



  fetchUser = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        this.fetchFollowers(data.followers_url)
        this.setState({data})
      })
      .catch((err) => console.log("error: ", err));
  };

  fetchFollowers = (url) => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((followerdata) => {
        this.fetchFollowersDetail(followerdata)
      })
      .catch((err) => console.log("error: ", err));
  };

  fetchFollowersDetail = (data) => {
    data.map((user) => (
      fetch(`${user.url}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({followerdata:this.state.followerdata.concat(data)});
      })
      .catch((err) => console.log("error: ", err))
    ))
    
  };
  render() {
    return (
      <div>
        <h1 className='center'>GitHub Profile</h1>
        <div className='cardContainer'>
        <Usercard data={this.state.data}/>
        </div>
        <h2 className='center'>Followers:</h2>
        <div className="cardContainer">
        {this.state.followerdata.map((user, x) => (
            <Usercard key={x} data={user} />
          ))}
      </div>
      </div>
    );
  }
}

export default App;
