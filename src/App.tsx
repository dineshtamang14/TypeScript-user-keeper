import React, {useState} from 'react';
import './App.css';
import User, { UserInterface } from './components/user';

const App: React.FC = () => {

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

    // console.log(userState.currentUser);

    setUsersState({
      ...userState,
      currentUser: {
        ...userState.currentUser,
        [e.target.name]: e.target.name === "age" ? Number(e.target.value) : e.target.value
      }
    })
  }

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUsersState({
      currentUser: {
        name: "",
        email: "",
        age: NaN,
        job: "",
      },
      allUsers: [
        ...userState.allUsers,
        userState.currentUser
      ]
    })
  }

  console.log(userState);

  const deleteHandler = (index: number): void => {
    const filterUsers = userState.allUsers.filter((user, i)=> {
      return index !== i;
    })

    setUsersState({
      ...userState,
      allUsers: filterUsers
    })
  }

  return (
    <div className="container">
      <h1>TypeScript</h1>
      <form onSubmit={submitForm} className="card">
        <label htmlFor="userName">Name:</label>
        <input type="text" name="name" id="userName" value={userState.currentUser.name}
          onChange={onChangeHandler}
          autoCapitalize="true"
          required
        />

        <label htmlFor="userEmail">Email:</label>
        <input type="email" name="email" id="userEmail" value={userState.currentUser.email} onChange={onChangeHandler} required />

        <label htmlFor="userAge">Age:</label>
        <input type="number" name="age" id="userAge" value={userState.currentUser.age} onChange={onChangeHandler} />

        <label htmlFor="userJob">Job:</label>
        <input type="text" name="job" id="userJob" value={userState.currentUser.job} onChange={onChangeHandler} required autoCapitalize='true' />

        <button type="submit" className='submitBtn'>Add user</button>
      </form>

      {userState.allUsers.map((user, i) => (
        <User user={user} i={i} deleteHandler={deleteHandler} key={i} />
      ))}
    </div>
  );
}

export default App;
