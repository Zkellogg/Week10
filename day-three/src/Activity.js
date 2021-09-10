import { useEffect, useState } from "react";

function Activity() {
  const [count, setCount] = useState(0);
  //   const [email, setEmail] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState([]);

  const upButton = () => {
    setCount(count + 1);
  };

  const downButton = () => {
    setCount(count - 1);
  };

  const getAllUsers = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((users) => {
        // setEmail(users.email);
        // setFirstName(users.firstName);
        // setLastName(users.lastName);
        // setAvatar(users.avatar);
        setUser(users);
        console.log(users);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={upButton}>Up</button>
      <button onClick={downButton}>Down</button>
    </div>
  );
}

export default Activity;

//https://reqres.in/api/users?page=2
