import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);
  return (
    <div>
      <h1>Profile functional Component</h1>
      <h2>{props.name}</h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        setCount
      </button>
    </div>
  );
};

export default Profile;
