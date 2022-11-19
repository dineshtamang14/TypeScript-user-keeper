import React from 'react';
import './App.css';

function App() {

  const firstName : string = "Dinesh Tamang";
  console.log(firstName);

  return (
    <div className="container">
      <h1>TypeScript</h1>
      <form>
        <label htmlFor="userName">Name:</label>
        <input type="text" name="name" id="userName" value="" />

        <label htmlFor="userEmail">Email:</label>
        <input type="email" name="email" id="userEmail" value="" />

        <label htmlFor="userAge">Age:</label>
        <input type="number" name="age" id="userAge" value="" />

        <label htmlFor="userJob">Job:</label>
        <input type="text" name="job" id="userJob" value="" />

        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default App;
