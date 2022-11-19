import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {

  interface UserInterface {
    name: string;
    email: string;
    age: number;
    job: string;
  }

  interface AllUsersInterface {
    currentUser: UserInterface;
    allUsers: Array<UserInterface>;
  }

  const [userState, setUsersState] = useState<AllUsersInterface>({
    currentUser: { 
      name: "",
      email: "",
      age: 0,
      job: ""
    },
    allUsers: []
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    console.log(userState.currentUser);

    setUsersState({
      ...userState,
      currentUser: {
        ...userState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUsersState({
      currentUser: {
        name: "",
        email: "",
        age: 0,
        job: "",
      },
      allUsers: [
        ...userState.allUsers,
        userState.currentUser
      ]
    })
  }

  return (
    <div className="container">
      <h1>TypeScript</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="userName">Name:</label>
        <input type="text" name="name" id="userName" value={userState.currentUser.name}
          onChange={onChangeHandler}
        />

        <label htmlFor="userEmail">Email:</label>
        <input type="email" name="email" id="userEmail" value={userState.currentUser.email} onChange={onChangeHandler} />

        <label htmlFor="userAge">Age:</label>
        <input type="number" name="age" id="userAge" value={userState.currentUser.age} onChange={onChangeHandler} />

        <label htmlFor="userJob">Job:</label>
        <input type="text" name="job" id="userJob" value={userState.currentUser.job} onChange={onChangeHandler} />

        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default App;
