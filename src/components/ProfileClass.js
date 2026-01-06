import React from "react";
class Profile extends React.Component {
  constructor(props) {
    console.log("child - constructor");
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arpuneet234");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log("child - componentDidMount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will mount");
  }

  render() {
    console.log("child - render");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
