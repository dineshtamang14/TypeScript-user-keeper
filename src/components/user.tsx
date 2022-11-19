import React from 'react'
import "./user.css";

export interface UserInterface {
    name: string;
    email: string;
    age?: string; //optional
    job: string;
  }

interface UserInputInt {
    user: UserInterface;
    i: number;
    deleteHandler: (i: number) => void;
    // deleteHandler: () => string;
}

const User: React.FC<UserInputInt> = ({ user, i, deleteHandler}) => {
  return (
    <div key={i} className="card">
        <div className="row">
            <h2>Name: </h2>
            <p>{user.name}</p>
        </div>
        <hr />

        <div className='row'>
          <h2>Email: </h2>
          <p>{user.email}</p>
        </div>
        <hr />

        {user.age && (
          <>
            <div className='row'>
              <h2>Age: </h2>
              <p>{user.age}</p>
            </div>
            <hr />
          </>
        )}

        <div className='row'>
          <h2>Job: </h2>
          <p>{user.job}</p>
        </div>
        <button onClick={() => deleteHandler(i)}>Delete user</button>
    </div>
  )
}

export default User;