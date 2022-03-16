import users from "./data/users.js";
import './App.css';

const App = () => {
  console.log(users)

  let renderUsers = users.map((user, index)=>{
    return <li key={index}>{user.name}</li>
  });

  return (
    <div className="App">
      <h1>Users Filter Sort</h1>
      <ul>{renderUsers}</ul>
    </div>
  );
}

export default App;
