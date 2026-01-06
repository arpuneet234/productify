import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile.js";
import React from "react";

class About extends React.Component {
  constructor(props) {
    console.log("parent - constructor");

    super(props);
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
  }
  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>About us page</h1>
        <ProfileFunctional name={"Puneet"} />
        <ProfileClass name={"Akshay"} />
      </div>
    );
  }
}

export default About;
