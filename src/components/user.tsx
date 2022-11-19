import React from 'react'
import "./user.css";

interface UserInterface {
    name: string;
    email: string;
    age: number;
    job: string;
  }

interface UserInputInt {
    user: UserInterface;
    i: number;
    deleteHandler: Function;
}

const User = ({ user, i, deleteHandler}: UserInputInt) => {
  return (
    <div key={i} className="card">
        <div className="row">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.age}</h2>
            <h2>{user.job}</h2>
            <button onClick={() => deleteHandler(i)}>Delete user</button>
        </div>
        <hr />
    </div>
  )
}

export default User;