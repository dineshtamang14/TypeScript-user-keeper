import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {

  interface UserInterface {
    name: string,
    age: string,
    job: string
  }

  const [userState, setUsersState] = useState<{ currentUser: UserInterface }>({
    currentUser: { 
      name: "",
      age: "",
      job: ""
    }
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    
  }

  return (
    <div className="container">
      <h1>TypeScript</h1>
      <form>
        <label htmlFor="userName">Name:</label>
        <input type="text" name="name" id="userName" value=""
          onChange={onChangeHandler}
        />

        <label htmlFor="userEmail">Email:</label>
        <input type="email" name="email" id="userEmail" value="" onChange={onChangeHandler} />

        <label htmlFor="userAge">Age:</label>
        <input type="number" name="age" id="userAge" value="" onChange={onChangeHandler} />

        <label htmlFor="userJob">Job:</label>
        <input type="text" name="job" id="userJob" value="" onChange={onChangeHandler} />

        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default App;
